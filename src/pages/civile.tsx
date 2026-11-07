import Image from "next/image";
import SiteLayout from "../components/SiteLayout";

const features = [
  {
    title: "Analisi e progettazione",
    text: "Valutiamo il contesto, le esigenze del cliente e le soluzioni tecniche più adatte prima di avviare l’intervento.",
  },
  {
    title: "Realizzazione",
    text: "Gestiamo le lavorazioni con attenzione a sicurezza, solidità, conformità normativa e qualità esecutiva.",
  },
  {
    title: "Manutenzione",
    text: "Interveniamo per preservare funzionalità, valore e durata degli edifici nel tempo.",
  },
];

const services = [
  {
    tag: "Completo",
    title: "Costruzione chiavi in mano",
    text: "Dalla progettazione alla consegna, con edifici solidi e conformi alle normative più recenti. ",
  },
  {
    tag: "Conservazione",
    title: "Manutenzione",
    text: "Interventi mirati per mantenere sicurezza, funzionalità e valore immobiliare.",
  },
  {
    tag: "Preparazione",
    title: "Demolizioni e scavi",
    text: "Attività eseguite con precisione per liberare, preparare e organizzare nuove aree di lavoro. ",
  },
  {
    tag: "Strutture",
    title: "Opere in calcestruzzo",
    text: "Fondazioni, strutture portanti, muri di sostegno, pavimentazioni e opere resistenti nel tempo. ",
  },
  {
    tag: "Sobrietà",
    title: "Opere cimiteriali",
    text: "Realizzazione di spazi dedicati alla memoria, con attenzione, rispetto e cura dei dettagli. ",
  },
  {
    tag: "Outdoor",
    title: "Piscine",
    text: "Progettazione, realizzazione e manutenzione di spazi ricreativi sicuri e funzionali.",
  },
];

const steps = [
  ["Sopralluogo e valutazione", "Analisi dello stato dei luoghi e delle necessità del cliente."],
  [
    "Pianificazione del cantiere",
    "Definizione di lavorazioni, mezzi, materiali e sequenza degli interventi.",
  ],
  [
    "Esecuzione e controllo",
    "Realizzazione delle opere con verifiche progressive durante le fasi di lavoro.",
  ],
  [
    "Consegna e assistenza",
    "Chiusura dell’intervento e supporto per eventuali esigenze successive.",
  ],
];

export default function Page() {
  return (
    <SiteLayout
      title="Edilizia civile | Costruzioni Bruzzese S.r.l. - Gozzano"
      description="Costruzioni Bruzzese S.r.l. a Gozzano (NO) realizza costruzioni civili, ristrutturazioni, manutenzioni, demolizioni, scavi, piscine e opere in calcestruzzo."
      page="civile"
      ogImage="/img/civile1.jpg"
      gallery={false}
      property={false}
      consent={false}
      canonical="https://costruzionibruzzesesrl.it/civile.html"
    >
      <main>
        <section className="page-hero">
          <div className="page-hero-media frame">
            <Image
              src="/img/civile1.jpg"
              alt="Edilizia civile Costruzioni Bruzzese"
              fill
              priority
              sizes="(max-width: 980px) 100vw, 55vw"
              className="media-zoom"
            />
          </div>
          <div className="page-hero-copy hero-enter">
            <span className="eyebrow">{"Costruzioni Bruzzese"}</span>
            <h1>{"Edilizia civile"}</h1>
            <p className="hero-text">
              {
                "Realizziamo e manuteniamo spazi destinati alla vita quotidiana: abitazioni, complessi residenziali, opere in calcestruzzo, scavi e interventi collegati al costruire civile."
              }
            </p>
            <div className="hero-buttons">
              <a className="btn-pill fill" href="#servizi">
                {"Scopri i servizi"}
              </a>
              <a className="btn-pill" href="#contatti">
                {"Parla con noi"}
              </a>
            </div>
          </div>
        </section>

        <section className="strip cols-3 reveal-group" aria-label="Sintesi servizi edilizia civile">
          <div className="intro-item">
            <strong>{"01"}</strong>
            <span>{"Costruzioni chiavi in mano"}</span>
          </div>
          <div className="intro-item">
            <strong>{"02"}</strong>
            <span>{"Manutenzioni e demolizioni"}</span>
          </div>
          <div className="intro-item">
            <strong>{"03"}</strong>
            <span>{"Scavi, piscine e calcestruzzo"}</span>
          </div>
        </section>

        <section className="section">
          <div className="overview">
            <aside className="sticky-note" data-reveal>
              <div className="frame sticky-photo">
                <Image
                  src="/img/civile2.jpg"
                  alt="Dettaglio intervento di edilizia civile"
                  fill
                  sizes="(max-width: 980px) 100vw, 40vw"
                />
              </div>
              <h2>{"Costruire spazi utili, solidi e duraturi."}</h2>
              <p className="copy">
                {
                  "L’edilizia civile è il cuore dell’attività dell’impresa: un ambito ampio che comprende immobili residenziali, strutture a uso collettivo e opere collegate alla qualità degli spazi abitati."
                }
              </p>
            </aside>
            <div>
              <div className="section-head">
                <span className="eyebrow">{"Approccio"}</span>
                <h2 className="section-heading">{"Dal terreno alla consegna"}</h2>
              </div>
              <div className="feature-list reveal-group">
                {features.map((feature, index) => (
                  <article className="feature" key={feature.title}>
                    <div className="number">{String(index + 1)}</div>
                    <div>
                      <h3>{feature.title}</h3>
                      <p className="copy">{feature.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section services-block on-dark" id="servizi">
          <div className="section-head">
            <span className="eyebrow">{"Servizi"}</span>
            <h2 className="section-heading">{"Interventi civili"}</h2>
          </div>
          <div className="service-cards reveal-group">
            {services.map((service, index) => (
              <article className="service-card" key={service.title}>
                <div className="service-card-top">
                  <span className="tag">{service.tag}</span>
                  <span className="service-num" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3>{service.title}</h3>
                <p className="copy">{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="split-photo">
          <div className="photo-side frame">
            <Image
              src="/img/civile2.jpg"
              alt="Cantiere edilizia civile"
              fill
              sizes="(max-width: 980px) 100vw, 50vw"
            />
          </div>
          <div className="process-side">
            <div className="section-head">
              <span className="eyebrow">{"Metodo di lavoro"}</span>
              <h2 className="section-heading">{"Un processo chiaro"}</h2>
              <p className="copy">
                {
                  "Ogni intervento viene organizzato per ridurre incertezze, coordinare le fasi operative e mantenere il controllo su qualità, tempi e sicurezza."
                }
              </p>
            </div>
            <div className="steps reveal-group">
              {steps.map(([title, text]) => (
                <div className="step" key={title}>
                  <strong>{title}</strong>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
