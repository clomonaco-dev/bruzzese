import { useEffect, useRef, type CSSProperties } from "react";

/* ------------------------------------------------------------------
   "Una casa, strato dopo strato": a villa that assembles itself while
   the page scrolls. The scroll position becomes a progress value (0–1),
   split into overlapping construction stages exposed as CSS variables
   (--s0 … --s6). Every SVG layer reads its own stage in CSS, so the
   whole scene runs without React re-renders.
   ------------------------------------------------------------------ */

const PHASES = [
  { title: "Progetto", text: "Rilievo, disegno e misure: ogni cantiere nasce sulla carta." },
  { title: "Fondazioni", text: "Scavo e platea in calcestruzzo, la base di tutto." },
  { title: "Murature", text: "Blocchi posati corso dopo corso, a regola d’arte." },
  { title: "Struttura e copertura", text: "Cordoli, travi a vista e il tetto curvo in alluminio." },
  { title: "Finiture e impianti", text: "Intonaci, serramenti e impianto fotovoltaico." },
  { title: "Consegna", text: "Luci accese: la casa è pronta da vivere." },
];

/** [start, end] of each stage on the 0–1 scroll progress. */
const STAGES: [number, number][] = [
  [0.0, 0.13], // s0 blueprint
  [0.11, 0.25], // s1 excavation + foundation
  [0.23, 0.43], // s2 walls
  [0.41, 0.55], // s3 ring beams + timber
  [0.53, 0.67], // s4 roofs
  [0.65, 0.8], // s5 plaster, windows, solar
  [0.78, 0.95], // s6 landscape + lights
];
const PHASE_START = [0, 0.11, 0.23, 0.41, 0.65, 0.78];

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const ease = (t: number) => 1 - Math.pow(1 - t, 3);

/* ---------- geometry of the curved roof (quadratic curves) ---------- */
const G = 560; // ground line
const front = (t: number) => ({ x: 450 + 560 * t, y: 400 - 148 * t * (1 - t) });
const back = (t: number) => ({ x: 470 + 520 * t, y: 372 - 140 * t * (1 - t) });
const under = (t: number) => 410 - 148 * t * (1 - t);
const onRoof = (t: number, u: number) => {
  const f = front(t);
  const b = back(t);
  return { x: f.x + (b.x - f.x) * u, y: f.y + (b.y - f.y) * u };
};
const tAt = (x: number) => (x - 450) / 560;
const f1 = (n: number) => n.toFixed(1);

const seams = Array.from({ length: 23 }, (_, k) => {
  const t = (k + 1) / 24;
  const a = front(t);
  const b = back(t);
  return `M${f1(a.x)} ${f1(a.y)} L${f1(b.x)} ${f1(b.y)}`;
});

const posts = Array.from({ length: 12 }, (_, k) => {
  const x = 510 + k * 40;
  return { x, top: under(tAt(x)) };
});

const panels = [
  [0.5, 0.585],
  [0.595, 0.68],
  [0.69, 0.775],
  [0.785, 0.87],
].map(([a, b]) => {
  const p = [onRoof(a, 0.18), onRoof(b, 0.18), onRoof(b, 0.86), onRoof(a, 0.86)];
  return p.map((q) => `${f1(q.x)},${f1(q.y)}`).join(" ");
});

/** Zig-zag lattice between two parallel lines (crane mast and jib). */
function lattice(x1: number, y1: number, x2: number, y2: number, step: number, vertical: boolean) {
  let d = "";
  if (vertical) {
    for (let y = y1, i = 0; y > y2; y -= step, i++)
      d += i % 2 ? `M${x2} ${y}L${x1} ${y - step}` : `M${x1} ${y}L${x2} ${y - step}`;
  } else {
    for (let x = x1, i = 0; x < x2; x += step, i++)
      d += i % 2 ? `M${x} ${y2}L${x + step} ${y1}` : `M${x} ${y1}L${x + step} ${y2}`;
  }
  return d;
}

const WALL_MAIN =
  "M480 400H980V560H480Z M530 440h100v120h-100Z M650 440h100v120h-100Z M790 452h80v64h-80Z M900 452h50v64h-50Z";
const WALL_GARAGE = "M260 430H480V560H260Z M290 470h160v90h-160Z";
const OPENINGS = [
  { x: 530, y: 440, w: 100, h: 120, door: true },
  { x: 650, y: 440, w: 100, h: 120, door: true },
  { x: 790, y: 452, w: 80, h: 64 },
  { x: 900, y: 452, w: 50, h: 64 },
];
const ROOF_SURFACE = "M450 400 Q730 326 1010 400 L990 372 Q730 302 470 372 Z";
const ROOF_FASCIA = "M450 400 Q730 326 1010 400 L1010 410 Q730 336 450 410 Z";

const v = (i: number) => ({ "--i": i }) as CSSProperties;

export default function HouseBuild() {
  const rootRef = useRef<HTMLElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const clipRef = useRef<SVGRectElement>(null);
  const trolleyRef = useRef<SVGGElement>(null);
  const cableRef = useRef<SVGPathElement>(null);
  const loadRef = useRef<SVGGElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const phasesRef = useRef<HTMLOListElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    // closer framing on phones: crop the scene around the house
    const narrow = window.matchMedia("(max-width: 900px)");
    const frame = () =>
      svgRef.current?.setAttribute("viewBox", narrow.matches ? "150 80 880 600" : "0 0 1200 680");
    frame();
    narrow.addEventListener("change", frame);

    let lastPhase = -1;
    const apply = (p: number, mx = 0, my = 0) => {
      const style = root.style;
      style.setProperty("--p", p.toFixed(4));
      STAGES.forEach(([a, b], i) => style.setProperty(`--s${i}`, ease(clamp((p - a) / (b - a))).toFixed(4)));
      style.setProperty("--mx", mx.toFixed(3));
      style.setProperty("--my", my.toFixed(3));

      // walls rise course by course (snapped to the 10px block courses)
      const s2 = ease(clamp((p - STAGES[2][0]) / (STAGES[2][1] - STAGES[2][0])));
      const h = Math.round((160 * s2) / 10) * 10;
      clipRef.current?.setAttribute("y", String(G - h));
      clipRef.current?.setAttribute("height", String(h + 1));

      // tower crane: trolley travels along the jib, the hook goes up and down
      const tx = 690 + 340 * (0.5 - 0.5 * Math.cos(p * Math.PI * 5));
      const drop = 70 + 150 * (0.5 - 0.5 * Math.cos(p * Math.PI * 10));
      trolleyRef.current?.setAttribute("transform", `translate(${f1(tx)} 0)`);
      cableRef.current?.setAttribute("d", `M0 172V${f1(172 + drop)}`);
      loadRef.current?.setAttribute("transform", `translate(0 ${f1(172 + drop)})`);

      if (counterRef.current) counterRef.current.textContent = String(Math.round(p * 100));

      const phase = PHASE_START.reduce((acc, start, i) => (p >= start ? i : acc), 0);
      if (phase !== lastPhase) {
        lastPhase = phase;
        phasesRef.current?.querySelectorAll("li").forEach((li, i) => {
          li.classList.toggle("is-active", i === phase);
          li.classList.toggle("is-done", i < phase);
        });
        if (mobileRef.current) {
          mobileRef.current.querySelector("strong")!.textContent = PHASES[phase].title;
          mobileRef.current.querySelector("p")!.textContent = PHASES[phase].text;
          mobileRef.current.querySelector("span")!.textContent = String(phase + 1).padStart(2, "0");
        }
      }
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      root.classList.add("is-static");
      apply(1);
      return () => narrow.removeEventListener("change", frame);
    }

    let target = 0;
    let current = 0;
    let mx = 0;
    let my = 0;
    let tmx = 0;
    let tmy = 0;
    let raf = 0;
    let running = false;

    const measure = () => {
      const r = root.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      target = total > 0 ? clamp(-r.top / total) : 1;
    };
    const tick = () => {
      current += (target - current) * 0.11;
      mx += (tmx - mx) * 0.06;
      my += (tmy - my) * 0.06;
      apply(current, mx, my);
      const moving =
        Math.abs(target - current) > 0.0004 || Math.abs(tmx - mx) > 0.002 || Math.abs(tmy - my) > 0.002;
      if (moving) raf = requestAnimationFrame(tick);
      else running = false;
    };
    const kick = () => {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(tick);
    };
    const onScroll = () => {
      measure();
      kick();
    };
    const onPointer = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      tmx = (event.clientX / window.innerWidth) * 2 - 1;
      tmy = (event.clientY / window.innerHeight) * 2 - 1;
      kick();
    };

    measure();
    current = target;
    apply(current);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    root.addEventListener("pointermove", onPointer);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      root.removeEventListener("pointermove", onPointer);
      narrow.removeEventListener("change", frame);
    };
  }, []);

  return (
    <section className="build" ref={rootRef} aria-label="Come costruiamo una casa">
      <div className="build-sticky">
        <div className="build-copy">
          <div>
            <span className="eyebrow">{"Come costruiamo"}</span>
            <h2 className="build-title">{"Una casa, strato dopo strato."}</h2>
          </div>

          <ol className="build-phases" ref={phasesRef}>
            {PHASES.map((phase, i) => (
              <li key={phase.title} className={i === 0 ? "is-active" : undefined}>
                <span className="build-phase-num">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <strong>{phase.title}</strong>
                  <p>{phase.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="build-mobile" ref={mobileRef} aria-hidden="true">
            <span>{"01"}</span>
            <div>
              <strong>{PHASES[0].title}</strong>
              <p>{PHASES[0].text}</p>
            </div>
          </div>

          <div className="build-meter">
            <span className="build-counter">
              <span ref={counterRef}>{"0"}</span>
              <small>{"%"}</small>
            </span>
            <span className="build-meter-label">{"Avanzamento cantiere"}</span>
            <span className="build-bar" aria-hidden="true">
              <span />
            </span>
          </div>
        </div>

        <div className="build-stage">
          <svg
            ref={svgRef}
            viewBox="0 0 1200 680"
            preserveAspectRatio="xMidYMid meet"
            role="img"
            aria-label="Una villetta che si costruisce dalle fondazioni al tetto"
          >
            <defs>
              <pattern id="hb-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M20 0H0V20" fill="none" stroke="#c2a878" strokeOpacity=".09" strokeWidth="1" />
              </pattern>
              <pattern id="hb-grid-major" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M100 0H0V100" fill="none" stroke="#c2a878" strokeOpacity=".16" strokeWidth="1" />
              </pattern>
              <pattern id="hb-blocks" width="40" height="20" patternUnits="userSpaceOnUse">
                <rect width="40" height="20" fill="#c9c2b3" />
                <path
                  d="M0 .5H40M0 10.5H40M.5 0V10M20.5 10V20"
                  stroke="#8f887a"
                  strokeWidth="1"
                  fill="none"
                />
              </pattern>
              <pattern id="hb-soil" width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <rect width="14" height="14" fill="#3a2f26" />
                <path d="M0 0V14" stroke="#5a4a3b" strokeWidth="3" />
              </pattern>
              <linearGradient id="hb-sky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#0b1018" />
                <stop offset=".62" stopColor="#1d2533" />
                <stop offset="1" stopColor="#4a3f36" />
              </linearGradient>
              <linearGradient id="hb-glass" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#5c6b80" />
                <stop offset=".5" stopColor="#2f3a4a" />
                <stop offset="1" stopColor="#1d2430" />
              </linearGradient>
              <linearGradient id="hb-warm" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#ffe2a8" />
                <stop offset="1" stopColor="#e8a85a" />
              </linearGradient>
              <linearGradient id="hb-roof" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#5b616b" />
                <stop offset="1" stopColor="#353a42" />
              </linearGradient>
              <linearGradient id="hb-plaster" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#efebe3" />
                <stop offset="1" stopColor="#dcd6cb" />
              </linearGradient>
              <linearGradient id="hb-ground" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#26301f" />
                <stop offset="1" stopColor="#11150f" />
              </linearGradient>
              <radialGradient id="hb-spill" cx=".5" cy="0" r=".7">
                <stop offset="0" stopColor="#ffcf7d" stopOpacity=".55" />
                <stop offset="1" stopColor="#ffcf7d" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="hb-halo">
                <stop offset="0" stopColor="#ffd890" stopOpacity=".9" />
                <stop offset="1" stopColor="#ffd890" stopOpacity="0" />
              </radialGradient>
              <filter id="hb-blur" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="10" />
              </filter>
              <clipPath id="hb-wall-clip">
                <rect ref={clipRef} x="0" y={G - 160} width="1200" height="161" />
              </clipPath>
            </defs>

            {/* ---------- far layer: night sky ---------- */}
            <g className="hb-far">
              <rect className="hb-sky" x="-1400" y="-900" width="4000" height="1520" fill="url(#hb-sky)" />
              <g className="hb-night">
                <circle cx="900" cy="120" r="22" fill="#ece5d2" />
                {[
                  [120, 80], [240, 140], [380, 60], [520, 110], [640, 50], [780, 130],
                  [860, 70], [1120, 160], [300, 210], [700, 200], [960, 220], [1150, 60],
                ].map(([x, y], i) => (
                  <circle key={i} className="hb-star" style={v(i)} cx={x} cy={y} r={i % 3 ? 1.2 : 1.8} fill="#fff" />
                ))}
              </g>
            </g>

            {/* ---------- blueprint ---------- */}
            <g className="hb-mid-far">
              <g className="hb-grid">
                <rect x="-1400" y="-900" width="4000" height="2400" fill="url(#hb-grid)" />
                <rect x="-1400" y="-900" width="4000" height="2400" fill="url(#hb-grid-major)" />
              </g>
              <g className="hb-annot" fill="#c2a878" fontSize="11" letterSpacing="2">
                <text x="60" y="58">{"PROSPETTO PRINCIPALE — SCALA 1:100"}</text>
                <text x="60" y="76" opacity=".6">{"COSTRUZIONI BRUZZESE · GOZZANO"}</text>
                <g className="hb-draw" stroke="#c2a878" strokeWidth="1" fill="none">
                  <path pathLength={1} d="M260 618H1010" />
                  <path pathLength={1} d="M260 610V626M480 610V626M1010 610V626" />
                  <path pathLength={1} d="M222 560V363" />
                  <path pathLength={1} d="M214 560H230M214 363H230" />
                                  </g>
                <text x="360" y="640">{"6.60"}</text>
                <text x="720" y="640">{"16.00"}</text>
                <text x="214" y="466" textAnchor="end">{"+3.80"}</text>
                <text x="994" y="552">{"± 0.00"}</text>
              </g>
              <g className="hb-outline hb-draw" fill="none" stroke="#c2a878" strokeWidth="1.2">
                <path pathLength={1} d="M260 560V430H480V400H980V560Z" />
                <path pathLength={1} d={ROOF_FASCIA} />
                <path pathLength={1} d="M290 560V470H450V560M530 560V440H630V560M650 560V440H750V560M790 452H870V516H790ZM900 452H950V516H900Z" />
              </g>
            </g>

            {/* ---------- tower crane ---------- */}
            <g className="hb-crane-wrap">
              <g className="hb-crane" fill="none" stroke="#c2a878" strokeWidth="1.6" strokeLinejoin="round">
                <path d="M1062 560V168M1082 560V168" />
                <path d={lattice(1062, 560, 1082, 168, 20, true)} strokeWidth="1" />
                <path d="M640 160H1180M640 172H1180" />
                <path d={lattice(640, 160, 1180, 172, 16, false)} strokeWidth="1" />
                <path d="M1072 160V112M1072 112L660 160M1072 112L1176 160" strokeWidth="1" />
                <rect x="1130" y="172" width="44" height="22" fill="#c2a878" fillOpacity=".25" />
                <rect x="1046" y="174" width="28" height="20" fill="#c2a878" fillOpacity=".15" />
                <path d="M1040 560H1104" strokeWidth="3" />
                <g ref={trolleyRef} transform="translate(860 0)">
                  <rect x="-9" y="170" width="18" height="7" fill="#c2a878" />
                  <path ref={cableRef} d="M0 172V260" strokeWidth="1" />
                  <g ref={loadRef} transform="translate(0 260)">
                    <path d="M-3 0L0 6L3 0" strokeWidth="1.2" />
                    <path d="M0 6L-22 16M0 6L22 16" strokeWidth=".8" />
                    <rect x="-24" y="16" width="48" height="18" fill="url(#hb-blocks)" stroke="#8f887a" strokeWidth="1" />
                  </g>
                </g>
              </g>
            </g>

            {/* ---------- the house ---------- */}
            <g className="hb-mid">
              {/* ground, excavation */}
              <rect className="hb-soil" x="230" y={G} width="790" height="46" fill="url(#hb-soil)" />
              <g className="hb-footings" fill="#7d776b">
                <rect x="250" y={G + 12} width="30" height="30" />
                <rect x="466" y={G + 12} width="30" height="30" />
                <rect x="700" y={G + 12} width="30" height="30" />
                <rect x="960" y={G + 12} width="30" height="30" />
              </g>
              <rect className="hb-grass" x="-1400" y={G} width="4000" height="900" fill="url(#hb-ground)" />
              <g className="hb-found">
                <rect x="244" y={G - 2} width="752" height="14" fill="#9b9586" />
                <path d={`M244 ${G - 2}H996`} stroke="#c9c2b3" strokeWidth="1.5" />
              </g>

              {/* light spill on the ground (night) */}
              <g className="hb-glow">
                <ellipse cx="580" cy={G + 18} rx="120" ry="34" fill="url(#hb-spill)" />
                <ellipse cx="700" cy={G + 18} rx="120" ry="34" fill="url(#hb-spill)" />
              </g>

              {/* masonry, revealed course by course */}
              <g clipPath="url(#hb-wall-clip)">
                <path d={WALL_MAIN} fill="url(#hb-blocks)" fillRule="evenodd" />
                <path d={WALL_GARAGE} fill="url(#hb-blocks)" fillRule="evenodd" />
                <path
                  className="hb-wall-edge"
                  d="M260 560V430H480V400H980V560"
                  fill="none"
                  stroke="#efe9dc"
                  strokeWidth="1.5"
                />
              </g>

              {/* plaster finish */}
              <g className="hb-plaster">
                <path d={WALL_MAIN} fill="url(#hb-plaster)" fillRule="evenodd" />
                <path d={WALL_GARAGE} fill="#e6e1d6" fillRule="evenodd" />
                <path d="M480 430V560" stroke="#c7c0b2" strokeWidth="1" />
              </g>

              {/* structure: ring beams, lintels, exposed timber */}
              <g className="hb-struct">
                <rect style={v(0)} x="476" y="396" width="508" height="9" fill="#a39d90" />
                <rect style={v(1)} x="256" y="426" width="228" height="9" fill="#a39d90" />
                {OPENINGS.map((o, i) => (
                  <rect key={o.x} style={v(2 + i)} x={o.x - 6} y={o.y - 8} width={o.w + 12} height="8" fill="#a39d90" />
                ))}
                <rect style={v(6)} x="284" y="462" width="172" height="8" fill="#a39d90" />
                {posts.map((post, i) => (
                  <rect
                    key={post.x}
                    style={v(3 + i * 0.6)}
                    x={post.x - 3}
                    y={f1(post.top)}
                    width="6"
                    height={f1(400 - post.top)}
                    fill="#b98a58"
                  />
                ))}
                <path
                  style={v(10)}
                  d="M462 406 Q730 334 998 406"
                  fill="none"
                  stroke="#a8784a"
                  strokeWidth="6"
                />
              </g>

              {/* garage flat roof */}
              <g className="hb-garage-roof">
                <rect x="250" y="418" width="236" height="12" fill="#3d424a" />
                <rect x="250" y="418" width="236" height="3" fill="#6b717a" />
              </g>

              {/* curved metal roof */}
              <g className="hb-roof">
                <path d={ROOF_SURFACE} fill="url(#hb-roof)" />
                <g className="hb-seams" stroke="#7d848e" strokeWidth="1" fill="none">
                  {seams.map((d, i) => (
                    <path key={i} d={d} pathLength={1} />
                  ))}
                </g>
                <path d={ROOF_FASCIA} fill="#2a2e34" />
                <path d="M450 400 Q730 326 1010 400" fill="none" stroke="#a6acb5" strokeWidth="1.2" />
              </g>

              {/* solar panels */}
              <g className="hb-panels">
                {panels.map((points, i) => (
                  <polygon key={i} style={v(i)} points={points} fill="#1d2a44" stroke="#5f7aa6" strokeWidth=".8" />
                ))}
              </g>

              {/* windows and doors */}
              <g className="hb-windows">
                {OPENINGS.map((o) => (
                  <g key={o.x}>
                    <rect x={o.x} y={o.y} width={o.w} height={o.h} fill="url(#hb-glass)" />
                    <rect className="hb-lit" x={o.x} y={o.y} width={o.w} height={o.h} fill="url(#hb-warm)" />
                    <path
                      d={`M${o.x + 6} ${o.y + o.h - 10}L${o.x + o.w * 0.45} ${o.y + 8}`}
                      stroke="#fff"
                      strokeOpacity=".18"
                      strokeWidth="6"
                    />
                    <rect
                      x={o.x + 2}
                      y={o.y + 2}
                      width={o.w - 4}
                      height={o.h - 4}
                      fill="none"
                      stroke="#2b2f36"
                      strokeWidth="4"
                    />
                    {o.door && (
                      <path d={`M${o.x + o.w / 2} ${o.y}V${o.y + o.h}`} stroke="#2b2f36" strokeWidth="3" />
                    )}
                  </g>
                ))}
                <g className="hb-gdoor">
                  <rect x="290" y="470" width="160" height="90" fill="#4a4f57" />
                  {[1, 2, 3, 4, 5].map((k) => (
                    <path key={k} d={`M290 ${470 + k * 15}H450`} stroke="#353a41" strokeWidth="1.5" />
                  ))}
                </g>
                <rect x="320" y="440" width="12" height="4" className="hb-lit-soft" fill="#ffd890" />
                <rect x="410" y="440" width="12" height="4" className="hb-lit-soft" fill="#ffd890" />
              </g>
            </g>

            {/* ---------- near layer: landscape ---------- */}
            <g className="hb-near">
              <g className="hb-tree">
                <path d="M168 560C170 520 166 490 172 460M172 500C182 488 190 480 204 476" stroke="#4b3b2c" strokeWidth="6" fill="none" strokeLinecap="round" />
                <circle cx="150" cy="430" r="42" fill="#2c3a2c" />
                <circle cx="196" cy="420" r="48" fill="#344535" />
                <circle cx="172" cy="380" r="44" fill="#3b4d3b" />
                <circle cx="214" cy="458" r="30" fill="#2a372a" />
              </g>
              <g className="hb-bushes">
                <ellipse cx="880" cy="556" rx="46" ry="16" fill="#2c3a2c" />
                <ellipse cx="930" cy="558" rx="34" ry="12" fill="#344535" />
                <ellipse cx="1040" cy="556" rx="40" ry="15" fill="#2c3a2c" />
              </g>
              <g className="hb-lamps">
                {[510, 1080].map((x) => (
                  <g key={x}>
                    <circle className="hb-halo" cx={x} cy="520" r="28" fill="url(#hb-halo)" />
                    <rect x={x - 2} y="522" width="4" height="38" fill="#2b2f36" />
                    <rect x={x - 5} y="514" width="10" height="9" fill="#ffd890" />
                  </g>
                ))}
              </g>
              <path className="hb-ground-line" d={`M-1400 ${G}H2600`} stroke="#c2a878" strokeOpacity=".5" strokeWidth="1" />
            </g>
          </svg>
          <div className="build-stage-fade" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
