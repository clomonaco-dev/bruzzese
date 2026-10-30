import SiteLayout from "../components/SiteLayout";
export default function Page() {
  return (
    <SiteLayout
      title="Edilizia industriale | Costruzioni Bruzzese S.r.l. - Gozzano"
      description="Costruzioni Bruzzese S.r.l. di Gozzano realizza e mantiene strutture industriali e commerciali: capannoni, magazzini, impianti, spazi logistici e ammodernamenti."
      styles={[
        "css/bootstrap.css",
        "css/style.css",
        "css/industriale.css",
        "/assets/fontawesome/css/all.min.css",
      ]}
      gallery={false}
      property={false}
      consent={false}
      canonical="https://costruzionibruzzesesrl.it/industriale.html"
    >
      <main>
        {" "}
        <section className="industrial-hero">
          {" "}
          <div
            className="hero-visual"
            role="img"
            aria-label="Edilizia industriale Costruzioni Bruzzese"
          ></div>{" "}
          <div className="hero-content">
            {" "}
            <span className="eyebrow">
              {"Spazi produttivi e logistici"}
            </span>{" "}
            <h1>{"Edilizia industriale"}</h1>{" "}
            <p className="hero-copy">
              {
                "Progettiamo e realizziamo infrastrutture per attività industriali e commerciali: fabbriche, magazzini, impianti produttivi, strutture logistiche e interventi di adeguamento."
              }
            </p>{" "}
            <div className="hero-actions">
              {" "}
              <a className="button fill" href="#servizi">
                {"Cosa realizziamo"}
              </a>{" "}
              <a className="button" href="#contatti">
                {"Richiedi informazioni"}
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section
          className="spec-bar"
          aria-label="Priorità dell'edilizia industriale"
        >
          {" "}
          <div className="spec">
            <strong>{"01"}</strong>
            <span>{"resistenza strutturale"}</span>
          </div>{" "}
          <div className="spec">
            <strong>{"02"}</strong>
            <span>{"logistica efficiente"}</span>
          </div>{" "}
          <div className="spec">
            <strong>{"03"}</strong>
            <span>{"spazi adattabili"}</span>
          </div>{" "}
          <div className="spec">
            <strong>{"04"}</strong>
            <span>{"sicurezza e norme"}</span>
          </div>{" "}
        </section>{" "}
        <section className="section">
          {" "}
          <div className="mission">
            {" "}
            <aside className="mission-card">
              {" "}
              <img
                src="/img/industriale2.jpg"
                alt="Struttura industriale realizzata da Costruzioni Bruzzese"
              />{" "}
              <h2>{"Ambienti funzionali per aziende in movimento."}</h2>{" "}
              <p className="copy">
                {
                  "Ogni struttura industriale deve sostenere processi, mezzi, persone e cambiamenti futuri. Per questo lavoriamo su solidità, praticità e possibilità di evoluzione degli spazi."
                }
              </p>{" "}
            </aside>{" "}
            <div>
              {" "}
              <span className="eyebrow" style={{ color: "var(--wine)" }}>
                {"Obiettivi tecnici"}
              </span>{" "}
              <h2 className="title">{"Progettati per lavorare"}</h2>{" "}
              <div className="criteria-grid">
                {" "}
                <article className="criterion">
                  {" "}
                  <h3>{"Carichi e mezzi"}</h3>{" "}
                  <p className="copy">
                    {
                      "Strutture pensate per supportare attrezzature, movimentazioni e attività operative."
                    }
                  </p>{" "}
                </article>{" "}
                <article className="criterion">
                  {" "}
                  <h3>{"Flussi"}</h3>{" "}
                  <p className="copy">
                    {
                      "Distribuzione degli spazi orientata alla logistica interna e all’efficienza del lavoro. "
                    }
                  </p>{" "}
                </article>{" "}
                <article className="criterion">
                  {" "}
                  <h3>{"Adattabilità"}</h3>{" "}
                  <p className="copy">
                    {
                      "Soluzioni capaci di seguire l’evoluzione delle esigenze produttive e commerciali."
                    }
                  </p>{" "}
                </article>{" "}
                <article className="criterion">
                  {" "}
                  <h3>{"Conformità"}</h3>{" "}
                  <p className="copy">
                    {
                      "Attenzione alle normative, alla sicurezza e alle destinazioni d’uso previste."
                    }
                  </p>{" "}
                </article>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="section services" id="servizi">
          {" "}
          <span className="eyebrow">{"Servizi"}</span>{" "}
          <h2 className="title">
            {"Dalla nuova costruzione alla manutenzione"}
          </h2>{" "}
          <div className="service-row">
            {" "}
            <article className="service-panel">
              {" "}
              <span className="tag">{"Nuovi impianti"}</span>{" "}
              <div>
                {" "}
                <h3>{"Costruzioni ex novo"}</h3>{" "}
                <p className="copy">
                  {
                    "Trasformiamo necessità operative e commerciali in strutture concrete, lavorando su funzione, solidità e organizzazione degli spazi."
                  }
                </p>{" "}
              </div>{" "}
            </article>{" "}
            <article className="service-panel">
              {" "}
              <span className="tag">{"Evoluzione"}</span>{" "}
              <div>
                {" "}
                <h3>{"Ammodernamento"}</h3>{" "}
                <p className="copy">
                  {
                    "Aggiorniamo impianti e spazi esistenti per migliorare utilizzo, tecnologia, sicurezza e capacità operativa."
                  }
                </p>{" "}
              </div>{" "}
            </article>{" "}
            <article className="service-panel">
              {" "}
              <span className="tag">{"Continuità"}</span>{" "}
              <div>
                {" "}
                <h3>{"Manutenzione"}</h3>{" "}
                <p className="copy">
                  {
                    "Interventi specialistici per preservare funzionalità, sicurezza e durata delle strutture industriali nel tempo."
                  }
                </p>{" "}
              </div>{" "}
            </article>{" "}
          </div>{" "}
        </section>{" "}
        <section className="photo-process">
          {" "}
          <div
            className="photo-process__image"
            role="img"
            aria-label="Cantiere industriale"
          ></div>{" "}
          <div className="photo-process__text">
            {" "}
            <span className="eyebrow" style={{ color: "var(--wine)" }}>
              {"Metodo operativo"}
            </span>{" "}
            <h2 className="title">{"Soluzioni su misura"}</h2>{" "}
            <p className="copy">
              {
                "Ogni intervento industriale richiede coordinamento, lettura delle esigenze produttive e una gestione precisa delle fasi di lavoro."
              }
            </p>{" "}
            <div className="process-list">
              {" "}
              <div className="process-item">
                <strong>{"Analisi delle necessità"}</strong>
                <span>
                  {
                    "Raccolta degli obiettivi pratici dell’attività e delle caratteristiche dello spazio."
                  }
                </span>
              </div>{" "}
              <div className="process-item">
                <strong>{"Definizione tecnica"}</strong>
                <span>
                  {
                    "Studio di materiali, strutture, percorsi, accessi e funzionalità richieste."
                  }
                </span>
              </div>{" "}
              <div className="process-item">
                <strong>{"Cantiere coordinato"}</strong>
                <span>
                  {
                    "Organizzazione delle lavorazioni per garantire sicurezza, qualità e continuità operativa."
                  }
                </span>
              </div>{" "}
              <div className="process-item">
                <strong>{"Supporto nel tempo"}</strong>
                <span>
                  {
                    "Manutenzione e adeguamenti per accompagnare la crescita dell’azienda."
                  }
                </span>
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="section applications">
          {" "}
          <span className="eyebrow" style={{ color: "var(--wine)" }}>
            {"Ambiti"}
          </span>{" "}
          <h2 className="title">{"Strutture e destinazioni"}</h2>{" "}
          <div className="application-grid">
            {" "}
            <article className="application">
              <strong>{"Fabbriche"}</strong>{" "}
              <p className="copy">
                {
                  "Spazi produttivi progettati per ospitare lavorazioni, mezzi e processi."
                }
              </p>{" "}
            </article>{" "}
            <article className="application">
              <strong>{"Magazzini"}</strong>{" "}
              <p className="copy">
                {
                  "Ambienti per stoccaggio, movimentazione e organizzazione merci."
                }
              </p>{" "}
            </article>{" "}
            <article className="application">
              <strong>{"Logistica"}</strong>{" "}
              <p className="copy">
                {
                  "Infrastrutture orientate a flussi, accessi e operatività efficiente."
                }
              </p>{" "}
            </article>{" "}
            <article className="application">
              <strong>{"Commercio"}</strong>{" "}
              <p className="copy">
                {
                  "Spazi funzionali per attività commerciali e servizi collegati."
                }
              </p>{" "}
            </article>{" "}
          </div>{" "}
        </section>{" "}
      </main>
    </SiteLayout>
  );
}
