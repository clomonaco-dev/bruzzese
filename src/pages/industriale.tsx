import Image from "next/image";
import SiteLayout from "../components/SiteLayout";

const criteria = [
  ["Carichi e mezzi", "Strutture pensate per supportare attrezzature, movimentazioni e attività operative."],
  ["Flussi", "Distribuzione degli spazi orientata alla logistica interna e all’efficienza del lavoro. "],
  ["Adattabilità", "Soluzioni capaci di seguire l’evoluzione delle esigenze produttive e commerciali."],
  ["Conformità", "Attenzione alle normative, alla sicurezza e alle destinazioni d’uso previste."],
];

const services = [
  {
    tag: "Nuovi impianti",
    title: "Costruzioni ex novo",
    text: "Trasformiamo necessità operative e commerciali in strutture concrete, lavorando su funzione, solidità e organizzazione degli spazi.",
  },
  {
    tag: "Evoluzione",
    title: "Ammodernamento",
    text: "Aggiorniamo impianti e spazi esistenti per migliorare utilizzo, tecnologia, sicurezza e capacità operativa.",
  },
  {
    tag: "Continuità",
    title: "Manutenzione",
    text: "Interventi specialistici per preservare funzionalità, sicurezza e durata delle strutture industriali nel tempo.",
  },
];

const process = [
  ["Analisi delle necessità", "Raccolta degli obiettivi pratici dell’attività e delle caratteristiche dello spazio."],
  ["Definizione tecnica", "Studio di materiali, strutture, percorsi, accessi e funzionalità richieste."],
  [
    "Cantiere coordinato",
    "Organizzazione delle lavorazioni per garantire sicurezza, qualità e continuità operativa.",
  ],
  ["Supporto nel tempo", "Manutenzione e adeguamenti per accompagnare la crescita dell’azienda."],
];

const applications = [
  ["Fabbriche", "Spazi produttivi progettati per ospitare lavorazioni, mezzi e processi."],
  ["Magazzini", "Ambienti per stoccaggio, movimentazione e organizzazione merci."],
  ["Logistica", "Infrastrutture orientate a flussi, accessi e operatività efficiente."],
  ["Commercio", "Spazi funzionali per attività commerciali e servizi collegati."],
];

export default function Page() {
  return (
    <SiteLayout
      title="Edilizia industriale | Costruzioni Bruzzese S.r.l. - Gozzano"
      description="Costruzioni Bruzzese S.r.l. di Gozzano realizza e mantiene strutture industriali e commerciali: capannoni, magazzini, impianti, spazi logistici e ammodernamenti."
      page="industriale"
      ogImage="/img/industriale1.jpg"
      gallery={false}
      property={false}
      consent={false}
      canonical="https://costruzionibruzzesesrl.it/industriale.html"
    >
      <main>
        <section className="page-hero is-reversed">
          <div className="page-hero-media frame">
            <Image
              src="/img/industriale1.jpg"
              alt="Edilizia industriale Costruzioni Bruzzese"
              fill
              priority
              sizes="(max-width: 980px) 100vw, 55vw"
              className="media-zoom"
            />
          </div>
          <div className="page-hero-copy hero-enter">
            <span className="eyebrow">{"Spazi produttivi e logistici"}</span>
            <h1>{"Edilizia industriale"}</h1>
            <p className="hero-copy">
              {
                "Progettiamo e realizziamo infrastrutture per attività industriali e commerciali: fabbriche, magazzini, impianti produttivi, strutture logistiche e interventi di adeguamento."
              }
            </p>
            <div className="hero-actions">
              <a className="button fill" href="#servizi">
                {"Cosa realizziamo"}
              </a>
              <a className="button" href="#contatti">
                {"Richiedi informazioni"}
              </a>
            </div>
          </div>
        </section>

        <section className="strip reveal-group" aria-label="Priorità dell'edilizia industriale">
          <div className="spec">
            <strong>{"01"}</strong>
            <span>{"resistenza strutturale"}</span>
          </div>
          <div className="spec">
            <strong>{"02"}</strong>
            <span>{"logistica efficiente"}</span>
          </div>
          <div className="spec">
            <strong>{"03"}</strong>
            <span>{"spazi adattabili"}</span>
          </div>
          <div className="spec">
            <strong>{"04"}</strong>
            <span>{"sicurezza e norme"}</span>
          </div>
        </section>

        <section className="section">
          <div className="mission">
            <aside className="mission-card" data-reveal>
              <div className="frame mission-photo">
                <Image
                  src="/img/industriale2.jpg"
                  alt="Struttura industriale realizzata da Costruzioni Bruzzese"
                  fill
                  sizes="(max-width: 980px) 100vw, 40vw"
                />
              </div>
              <h2>{"Ambienti funzionali per aziende in movimento."}</h2>
              <p className="copy">
                {
                  "Ogni struttura industriale deve sostenere processi, mezzi, persone e cambiamenti futuri. Per questo lavoriamo su solidità, praticità e possibilità di evoluzione degli spazi."
                }
              </p>
            </aside>
            <div>
              <div className="section-head">
                <span className="eyebrow">{"Obiettivi tecnici"}</span>
                <h2 className="title">{"Progettati per lavorare"}</h2>
              </div>
              <div className="criteria-grid reveal-group">
                {criteria.map(([title, text], index) => (
                  <article className="criterion" key={title}>
                    <span className="criterion-num" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3>{title}</h3>
                    <p className="copy">{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section services on-dark" id="servizi">
          <div className="section-head">
            <span className="eyebrow">{"Servizi"}</span>
            <h2 className="title">{"Dalla nuova costruzione alla manutenzione"}</h2>
          </div>
          <div className="service-row reveal-group">
            {services.map((service, index) => (
              <article className="service-panel" key={service.title}>
                <span className="service-big" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="tag">{service.tag}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p className="copy">{service.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="photo-process">
          <div className="photo-process__image frame">
            <Image
              src="/img/industriale2.jpg"
              alt="Cantiere industriale"
              fill
              sizes="(max-width: 980px) 100vw, 50vw"
            />
          </div>
          <div className="photo-process__text">
            <div className="section-head">
              <span className="eyebrow">{"Metodo operativo"}</span>
              <h2 className="title">{"Soluzioni su misura"}</h2>
              <p className="copy">
                {
                  "Ogni intervento industriale richiede coordinamento, lettura delle esigenze produttive e una gestione precisa delle fasi di lavoro."
                }
              </p>
            </div>
            <div className="process-list reveal-group">
              {process.map(([title, text]) => (
                <div className="process-item" key={title}>
                  <strong>{title}</strong>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section applications">
          <div className="section-head">
            <span className="eyebrow">{"Ambiti"}</span>
            <h2 className="title">{"Strutture e destinazioni"}</h2>
          </div>
          <div className="application-grid reveal-group">
            {applications.map(([title, text]) => (
              <article className="application" key={title}>
                <strong>{title}</strong>
                <p className="copy">{text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
