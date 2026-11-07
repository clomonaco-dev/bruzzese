import Image from "next/image";
import SiteLayout from "../components/SiteLayout";
import SoldNotice from "../components/SoldNotice";
export default function Page() {
  return (
    <SiteLayout
      title="Villetta moderna a Gozzano | Costruzioni Bruzzese S.r.l."
      description="Villetta moderna di nuova costruzione a Gozzano (NO), progetto residenziale indipendente vicino al lago e al centro con planimetrie, video e galleria immagini."
      page="vendite"
      ogImage="/img/lavorazioni/1/foto-inserimento.jpg"
      gallery={true}
      property={true}
      canonical="https://costruzionibruzzesesrl.it/vendite.html"
    >
      <SoldNotice />
      <main>
        
        <section className="page-hero hero-vendita">
          
          <div className="page-hero-copy hero-enter">
            
            <span className="eyebrow">
              {"Vendite / nuova costruzione"}
            </span>
            <h1>{"Villetta moderna a Gozzano"}</h1>
            <p>
              {
                "Design contemporaneo, comfort di nuova generazione e una posizione tranquilla a pochi passi dal centro e dal Lago d’Orta."
              }
            </p>
            <p>
              {"A "}
              <a
                href="https://maps.app.goo.gl/xPGsjCk1dSebS3EP9"
                target="_blank"
                rel="noopener"
                className="inline-link"
              >
                {"Gozzano, in via Baraggiola 50"}
              </a>
              {
                ", una villetta su un unico piano con tetto curvo, travi a vista, impianto fotovoltaico e spazi progettati per durare nel tempo."
              }
            </p>
            <div className="actions">
              
              <a
                className="btn-pill fill"
                href="/img/lavorazioni/1/presentazione.mp4"
                data-fancybox="video-presentazione"
              >
                {"Guarda il video"}
              </a>
              <a className="btn-pill" href="#galleria">
                {"Vedi immagini"}
              </a>
              <a className="btn-pill" href="#planimetrie">
                {"Planimetrie"}
              </a>
              <a className="btn-pill" href="#form">
                {"Scrivici"}
              </a>
            </div>
          </div>
          <a
            className="page-hero-media frame hero-photo"
            href="/img/lavorazioni/1/foto-inserimento.jpg"
            data-fancybox="gallery-villetta-curva"
            aria-label="Immagine principale villetta"
          >
            <Image
              src="/img/lavorazioni/1/copertina.jpg"
              alt=""
              fill
              priority
              sizes="(max-width: 980px) 100vw, 55vw"
              className="media-zoom"
            />
            <span className="sold-tag">{"Venduta"}</span>
          </a>
        </section>
        <section className="strip quick-facts reveal-group">
          
          <div className="fact">
            <strong>{"100 m²"}</strong>
            <span>{"abitativi circa"}</span>
          </div>
          <div className="fact">
            <strong>{"220 m²"}</strong>
            <span>{"giardino privato"}</span>
          </div>
          <div className="fact">
            <strong>{"A4"}</strong>
            <span>{"classe energetica"}</span>
          </div>
          <div className="fact">
            <strong>{"6,85 kWp"}</strong>
            <span>{"fotovoltaico"}</span>
          </div>
        </section>
        <section className="section project-grid" id="galleria">
          
          <aside className="project-card" id="planimetrie" data-reveal>
            
            <span className="eyebrow">
              {"Caratteristiche"}
            </span>
            <h2 className="title">{"Una casa su misura"}</h2>
            <p className="copy">
              {
                "Un’abitazione indipendente, luminosa e pratica, pensata per unire architettura contemporanea, efficienza energetica e qualità costruttiva."
              }
            </p>
            <ul className="copy">
              
              <li>
                {"Superficie abitativa di circa 100 m² su un unico piano"}
              </li>
              <li>{"Giardino privato pianeggiante di circa 220 m²"}</li>
              <li>{"Zona giorno luminosa con soffitto curvo alto"}</li>
              <li>{"3 camere, una matrimoniale con bagno padronale"}</li>
              <li>
                {"2 bagni totali e autorimessa doppia collegata internamente"}
              </li>
              <li>
                {"Riscaldamento a pavimento e caldaia ibrida gas/elettrica"}
              </li>
              <li>
                {"Predisposizione per raffrescamento, allarme e domotica"}
              </li>
              <li>
                {"Finiture e colori personalizzabili in corso d’opera"}
              </li>
            </ul>
            <div className="doc-links">
              
              <a
                className="btn-pill dark"
                href="/img/lavorazioni/1/planimetria-interno.pdf"
                target="_blank"
                rel="noopener"
              >
                {"Planimetria"}
              </a>
              <a
                className="btn-pill dark"
                href="/img/lavorazioni/1/planimetria-prospetti.pdf"
                target="_blank"
                rel="noopener"
              >
                {"Prospetti"}
              </a>
            </div>
          </aside>
          <div className="slider-wrap" data-reveal>
            
            <div className="owl-carousel property-carousel">
              
              <a
                href="/img/lavorazioni/1/1.jpg"
                data-fancybox="gallery-villetta-curva"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  className="slide-img"
                  src="/img/lavorazioni/1/1.jpg"
                  alt="Villetta moderna Gozzano 1"
                />
              </a>
              <a
                href="/img/lavorazioni/1/2.jpg"
                data-fancybox="gallery-villetta-curva"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  className="slide-img"
                  src="/img/lavorazioni/1/2.jpg"
                  alt="Villetta moderna Gozzano 2"
                />
              </a>
              <a
                href="/img/lavorazioni/1/3.jpg"
                data-fancybox="gallery-villetta-curva"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  className="slide-img"
                  src="/img/lavorazioni/1/3.jpg"
                  alt="Villetta moderna Gozzano 3"
                />
              </a>
              <a
                href="/img/lavorazioni/1/4.jpg"
                data-fancybox="gallery-villetta-curva"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  className="slide-img"
                  src="/img/lavorazioni/1/4.jpg"
                  alt="Villetta moderna Gozzano 4"
                />
              </a>
              <a
                href="/img/lavorazioni/1/5.jpg"
                data-fancybox="gallery-villetta-curva"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  className="slide-img"
                  src="/img/lavorazioni/1/5.jpg"
                  alt="Villetta moderna Gozzano 5"
                />
              </a>
              <a
                href="/img/lavorazioni/1/6.jpg"
                data-fancybox="gallery-villetta-curva"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  className="slide-img"
                  src="/img/lavorazioni/1/6.jpg"
                  alt="Villetta moderna Gozzano 6"
                />
              </a>
              <a
                href="/img/lavorazioni/1/7.jpg"
                data-fancybox="gallery-villetta-curva"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  className="slide-img"
                  src="/img/lavorazioni/1/7.jpg"
                  alt="Villetta moderna Gozzano 7"
                />
              </a>
              <a
                href="/img/lavorazioni/1/8.jpg"
                data-fancybox="gallery-villetta-curva"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  className="slide-img"
                  src="/img/lavorazioni/1/8.jpg"
                  alt="Villetta moderna Gozzano 8"
                />
              </a>
              <a
                href="/img/lavorazioni/1/9.jpg"
                data-fancybox="gallery-villetta-curva"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  className="slide-img"
                  src="/img/lavorazioni/1/9.jpg"
                  alt="Villetta moderna Gozzano 9"
                />
              </a>
              <a
                href="/img/lavorazioni/1/10.jpg"
                data-fancybox="gallery-villetta-curva"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  className="slide-img"
                  src="/img/lavorazioni/1/10.jpg"
                  alt="Villetta moderna Gozzano 10"
                />
              </a>
              <a
                href="/img/lavorazioni/1/11.jpg"
                data-fancybox="gallery-villetta-curva"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  className="slide-img"
                  src="/img/lavorazioni/1/11.jpg"
                  alt="Villetta moderna Gozzano 11"
                />
              </a>
              <a
                href="/img/lavorazioni/1/12.jpg"
                data-fancybox="gallery-villetta-curva"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  className="slide-img"
                  src="/img/lavorazioni/1/12.jpg"
                  alt="Villetta moderna Gozzano 12"
                />
              </a>
              <a
                href="/img/lavorazioni/1/13.jpg"
                data-fancybox="gallery-villetta-curva"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  className="slide-img"
                  src="/img/lavorazioni/1/13.jpg"
                  alt="Villetta moderna Gozzano 13"
                />
              </a>
              <a
                href="/img/lavorazioni/1/14.jpg"
                data-fancybox="gallery-villetta-curva"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  className="slide-img"
                  src="/img/lavorazioni/1/14.jpg"
                  alt="Villetta moderna Gozzano 14"
                />
              </a>
              <a
                href="/img/lavorazioni/1/15.jpg"
                data-fancybox="gallery-villetta-curva"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  className="slide-img"
                  src="/img/lavorazioni/1/15.jpg"
                  alt="Villetta moderna Gozzano 15"
                />
              </a>
              <a
                href="/img/lavorazioni/1/16.jpg"
                data-fancybox="gallery-villetta-curva"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  className="slide-img"
                  src="/img/lavorazioni/1/16.jpg"
                  alt="Villetta moderna Gozzano 16"
                />
              </a>
            </div>
          </div>
        </section>
        <section className="section three-panels reveal-group">
          
          <article className="panel">
            
            <div>
              
              <h3>{"Posizione e contesto"}</h3>
              <p className="copy">
                {
                  "Zona residenziale tranquilla e ben collegata, vicino al centro di Gozzano e a pochi minuti dal Lago d’Orta. La pista ciclo-pedonale adiacente collega il quartiere ai servizi principali."
                }
              </p>
            </div>
            <a
              className="btn-pill dark"
              href="https://maps.app.goo.gl/xPGsjCk1dSebS3EP9"
              target="_blank"
              rel="noopener"
            >
              {"Apri mappa"}
            </a>
          </article>
          <article className="panel">
            
            <div>
              
              <h3>{"Architettura e materiali"}</h3>
              <p className="copy">
                {
                  "Blocchi in gasbeton da 40 cm, copertura curva in alluminio a doppia aggraffatura, pacchetto isolante e travi a vista: materiali scelti per isolamento, carattere e durata."
                }
              </p>
            </div>
            <span className="panel-mark">{"A4"}</span>
          </article>
          <article className="panel">
            
            <div>
              
              <h3>{"Vivere qui"}</h3>
              <p className="copy">
                {
                  "Una casa indipendente dove luce naturale, tecnologia, comfort e natura lavorano insieme per un nuovo modo di abitare: sostenibile, elegante e pensato per il futuro."
                }
              </p>
            </div>
            <span className="panel-mark">{"6,85"}</span>
          </article>
        </section>
        <section className="video-section">
          
          <a
            className="video-img frame"
            href="/img/lavorazioni/1/presentazione.mp4"
            data-fancybox="video-villetta"
            aria-label="Anteprima video villetta"
          >
            <Image
              src="/img/lavorazioni/1/foto-inserimento.jpg"
              alt=""
              fill
              sizes="(max-width: 980px) 100vw, 55vw"
            />
            <span className="play" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="26" height="26"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor" /></svg>
            </span>
          </a>
          <div className="video-copy" data-reveal>
            
            <span className="eyebrow">{"Video"}</span>
            <h2 className="title">{"Guarda la presentazione"}</h2>
            <p className="copy">
              {
                "Un contenuto rapido per vedere il progetto, gli spazi e l’idea abitativa della villetta."
              }
            </p>
            <div className="actions">
              
              <a
                className="btn-pill fill"
                href="/img/lavorazioni/1/presentazione.mp4"
                data-fancybox="video-villetta"
              >
                {"Apri video"}
              </a>
              <a className="btn-pill" href="tel:+393484277541">
                {"348 4277541"}
              </a>
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
