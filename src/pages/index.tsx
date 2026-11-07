import Image from "next/image";
import SiteLayout from "../components/SiteLayout";
import WorkSlider from "../components/WorkSlider";
import HouseBuild from "../components/HouseBuild";

const timeline = [
  {
    title: "Le origini",
    text: "La passione per l’edilizia nasce dall’esperienza trasmessa da Salvatore Bruzzese a suo figlio Raimondo, attraverso lavoro pratico, dedizione e conoscenza del mestiere.",
  },
  {
    title: "1986",
    text: "Raimondo Bruzzese fonda Costruzioni Bruzzese, costruendo negli anni una realtà orientata a serietà, qualità esecutiva e rapporto diretto con il cliente.",
  },
  {
    title: "Oggi",
    text: "Denis Bruzzese prosegue il percorso familiare, portando avanti la tradizione dell’impresa con competenze tecniche e attenzione alle nuove esigenze del settore.",
  },
  {
    title: "Metodo",
    text: "L’impresa interviene su nuove costruzioni, ristrutturazioni, manutenzioni e lavori per privati, aziende ed enti pubblici, scegliendo soluzioni adatte a ogni progetto.",
  },
];

const services = [
  {
    title: "Edilizia civile",
    text: "Realizzazione e ristrutturazione di edifici destinati all’uso privato e pubblico, con attenzione a funzionalità, durata e qualità delle finiture.",
    href: "/civile.html",
    image: "/img/gallery-civile/slider-civile/1.jpg",
  },
  {
    title: "Edilizia industriale",
    text: "Costruzione, manutenzione e modifica di spazi destinati ad attività industriali e logistiche, nel rispetto delle destinazioni d’uso.",
    href: "/industriale.html",
    image: "/img/gallery-edilizia/slider-edilizia/1.jpg",
  },
];

export default function Page() {
  return (
    <SiteLayout
      title="Costruzioni Bruzzese S.r.l. | Impresa edile a Gozzano"
      description="Costruzioni Bruzzese S.r.l. è un'impresa edile di Gozzano (NO), attiva dal 1986 in edilizia civile, industriale, ristrutturazioni e servizi per privati, aziende ed enti pubblici."
      page="home"
      ogImage="/img/head.jpg"
      gallery={true}
      property={false}
      canonical="https://costruzionibruzzesesrl.it/"
    >
      <main>
        <section className="hero">
          <div className="hero-media frame">
            <Image
              src="/img/head.jpg"
              alt="Cantiere e realizzazioni Costruzioni Bruzzese"
              fill
              priority
              sizes="100vw"
              className="media-zoom"
            />
          </div>
          <span className="hero-year" aria-hidden="true">
            {"1986"}
          </span>
          <div className="hero-copy hero-enter">
            <span className="eyebrow">{"Impresa edile a Gozzano"}</span>
            <h1>{"Costruire bene, da generazioni."}</h1>
            <p>
              {
                "Costruzioni Bruzzese S.r.l. opera in edilizia civile e industriale con un approccio concreto, familiare e orientato alla qualità del cantiere."
              }
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#contatti">
                {"Richiedi informazioni"}
              </a>
              <a className="button light" href="#lavori">
                {"Guarda i lavori"}
              </a>
            </div>
          </div>
          <span className="scroll-cue" aria-hidden="true" />
        </section>

        <section className="strip stats-strip reveal-group" aria-label="Informazioni principali">
          <div className="stat-box">
            <strong>{"1986"}</strong>
            <span>{"anno di fondazione"}</span>
          </div>
          <div className="stat-box">
            <strong>{"2"}</strong>
            <span>{"generazioni operative"}</span>
          </div>
          <div className="stat-box">
            <strong>{"OG1"}</strong>
            <span>{"edifici civili e industriali"}</span>
          </div>
          <div className="stat-box">
            <strong>{"OG3"}</strong>
            <span>{"strade, ponti e viabilità"}</span>
          </div>
        </section>

        <HouseBuild />

        <section className="section" id="storia">
          <div className="about-layout">
            <aside className="about-card" data-reveal>
              <div className="frame about-photo">
                <Image
                  src="/img/sede.jpg"
                  alt="Sede Costruzioni Bruzzese a Gozzano"
                  fill
                  sizes="(max-width: 980px) 100vw, 40vw"
                />
              </div>
              <p>{"Via dei Martiri delle Foibe 7, Gozzano (NO)"}</p>
            </aside>
            <div>
              <div className="section-head">
                <span className="eyebrow">{"La nostra storia"}</span>
                <h2 className="section-title">{"Dalla famiglia al cantiere"}</h2>
              </div>
              <div className="timeline reveal-group">
                {timeline.map((item, index) => (
                  <article className="timeline-item" key={item.title}>
                    <span className="timeline-index" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3>{item.title}</h3>
                    <p className="text">{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section services on-dark">
          <div className="section-head services-head">
            <span className="eyebrow">{"Aree di intervento"}</span>
            <h2 className="section-title">{"Cosa facciamo"}</h2>
          </div>
          <div className="service-grid reveal-group">
            {services.map((service, index) => (
              <a className="service-card" href={service.href} key={service.title}>
                <div className="frame service-media">
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    sizes="(max-width: 760px) 100vw, 50vw"
                  />
                </div>
                <span className="service-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p className="text">{service.text}</p>
                  <span className="button light">{"Scopri di più"}</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="gallery-section" id="lavori">
          <aside className="gallery-aside" data-reveal>
            <div>
              <span className="eyebrow">{"Realizzazioni"}</span>
              <h2 className="section-title">{"Cantieri e dettagli"}</h2>
            </div>
            <p className="text">
              {
                " Una selezione di immagini dai lavori di edilizia civile e industriale. Clicca sulla foto centrale per aprire la galleria. "
              }
            </p>
          </aside>
          <WorkSlider />
        </section>

        <section className="section credentials reveal-group">
          <article className="info-panel">
            <h3>{"Corsi e certificazioni"}</h3>
            <p className="text">
              {"L’impresa dispone di competenze operative per lavorazioni e mezzi specifici di cantiere."}
            </p>
            <div className="pill-list">
              <span className="pill">{"Macchine movimento terra"}</span>
              <span className="pill">{"Piattaforme mobili elevabili"}</span>
              <span className="pill">{"Carrelli elevatori telescopici"}</span>
              <span className="pill">{"Spazi confinanti"}</span>
              <span className="pill">{"Gru a torre"}</span>
              <span className="pill">{"Ponteggi"}</span>
            </div>
          </article>
          <article className="info-panel">
            <h3>{"Categorie e servizi"}</h3>
            <p className="text">
              <strong>{"OG1:"}</strong>
              {" edifici civili e industriali."}
            </p>
            <p className="text">
              <strong>{"OG3:"}</strong>
              {" strade, autostrade, ponti, viadotti, ferrovie, metropolitane."}
            </p>
            <div className="pill-list">
              <span className="pill">{"Pulizia delle strade"}</span>
              <span className="pill">{"Servizi invernali"}</span>
              <span className="pill">{"Operazioni cimiteriali"}</span>
            </div>
          </article>
        </section>
      </main>
    </SiteLayout>
  );
}
