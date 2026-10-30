import SiteLayout from "../components/SiteLayout";
export default function Page() {
  return (
    <SiteLayout
      title="Edilizia civile | Costruzioni Bruzzese S.r.l. - Gozzano"
      description="Costruzioni Bruzzese S.r.l. a Gozzano (NO) realizza costruzioni civili, ristrutturazioni, manutenzioni, demolizioni, scavi, piscine e opere in calcestruzzo."
      styles={[
        "css/bootstrap.css",
        "css/style.css",
        "css/civile.css",
        "/assets/fontawesome/css/all.min.css",
      ]}
      gallery={false}
      property={false}
      consent={false}
      canonical="https://costruzionibruzzesesrl.it/civile.html"
    >
      <main>
        {" "}
        <section className="hero-civile">
          {" "}
          <div className="hero-panel">
            {" "}
            <span className="eyebrow">{"Costruzioni Bruzzese"}</span>{" "}
            <h1>{"Edilizia civile"}</h1>{" "}
            <p className="hero-text">
              {
                "Realizziamo e manuteniamo spazi destinati alla vita quotidiana: abitazioni, complessi residenziali, opere in calcestruzzo, scavi e interventi collegati al costruire civile."
              }
            </p>{" "}
            <div className="hero-buttons">
              {" "}
              <a className="btn-pill fill" href="#servizi">
                {"Scopri i servizi"}
              </a>{" "}
              <a className="btn-pill" href="#contatti">
                {"Parla con noi"}
              </a>{" "}
            </div>{" "}
          </div>{" "}
          <div
            className="hero-image"
            role="img"
            aria-label="Edilizia civile Costruzioni Bruzzese"
          ></div>{" "}
        </section>{" "}
        <section
          className="intro-strip"
          aria-label="Sintesi servizi edilizia civile"
        >
          {" "}
          <div className="intro-item">
            <strong>{"01"}</strong>
            <span>{"Costruzioni chiavi in mano"}</span>
          </div>{" "}
          <div className="intro-item">
            <strong>{"02"}</strong>
            <span>{"Manutenzioni e demolizioni"}</span>
          </div>{" "}
          <div className="intro-item">
            <strong>{"03"}</strong>
            <span>{"Scavi, piscine e calcestruzzo"}</span>
          </div>{" "}
        </section>{" "}
        <section className="section">
          {" "}
          <div className="overview">
            {" "}
            <aside className="sticky-note">
              {" "}
              <img
                src="/img/civile2.jpg"
                alt="Dettaglio intervento di edilizia civile"
              />{" "}
              <h2>{"Costruire spazi utili, solidi e duraturi."}</h2>{" "}
              <p className="copy">
                {
                  "L’edilizia civile è il cuore dell’attività dell’impresa: un ambito ampio che comprende immobili residenziali, strutture a uso collettivo e opere collegate alla qualità degli spazi abitati."
                }
              </p>{" "}
            </aside>{" "}
            <div>
              {" "}
              <span className="eyebrow" style={{ color: "var(--wine)" }}>
                {"Approccio"}
              </span>{" "}
              <h2 className="section-heading">{"Dal terreno alla consegna"}</h2>{" "}
              <div className="feature-list">
                {" "}
                <article className="feature">
                  {" "}
                  <div className="number">{"1"}</div>{" "}
                  <div>
                    {" "}
                    <h3>{"Analisi e progettazione"}</h3>{" "}
                    <p className="copy">
                      {
                        "Valutiamo il contesto, le esigenze del cliente e le soluzioni tecniche più adatte prima di avviare l’intervento."
                      }
                    </p>{" "}
                  </div>{" "}
                </article>{" "}
                <article className="feature">
                  {" "}
                  <div className="number">{"2"}</div>{" "}
                  <div>
                    {" "}
                    <h3>{"Realizzazione"}</h3>{" "}
                    <p className="copy">
                      {
                        "Gestiamo le lavorazioni con attenzione a sicurezza, solidità, conformità normativa e qualità esecutiva."
                      }
                    </p>{" "}
                  </div>{" "}
                </article>{" "}
                <article className="feature">
                  {" "}
                  <div className="number">{"3"}</div>{" "}
                  <div>
                    {" "}
                    <h3>{"Manutenzione"}</h3>{" "}
                    <p className="copy">
                      {
                        "Interveniamo per preservare funzionalità, valore e durata degli edifici nel tempo."
                      }
                    </p>{" "}
                  </div>{" "}
                </article>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="section services-block" id="servizi">
          {" "}
          <span className="eyebrow">{"Servizi"}</span>{" "}
          <h2 className="section-heading">{"Interventi civili"}</h2>{" "}
          <div className="service-cards">
            {" "}
            <article className="service-card">
              {" "}
              <span className="tag">{"Completo"}</span>{" "}
              <h3>{"Costruzione chiavi in mano"}</h3>{" "}
              <p className="copy">
                {
                  "Dalla progettazione alla consegna, con edifici solidi e conformi alle normative più recenti. "
                }
              </p>{" "}
            </article>{" "}
            <article className="service-card">
              {" "}
              <span className="tag">{"Conservazione"}</span>{" "}
              <h3>{"Manutenzione"}</h3>{" "}
              <p className="copy">
                {
                  "Interventi mirati per mantenere sicurezza, funzionalità e valore immobiliare."
                }
              </p>{" "}
            </article>{" "}
            <article className="service-card">
              {" "}
              <span className="tag">{"Preparazione"}</span>{" "}
              <h3>{"Demolizioni e scavi"}</h3>{" "}
              <p className="copy">
                {
                  "Attività eseguite con precisione per liberare, preparare e organizzare nuove aree di lavoro. "
                }
              </p>{" "}
            </article>{" "}
            <article className="service-card">
              {" "}
              <span className="tag">{"Strutture"}</span>{" "}
              <h3>{"Opere in calcestruzzo"}</h3>{" "}
              <p className="copy">
                {
                  "Fondazioni, strutture portanti, muri di sostegno, pavimentazioni e opere resistenti nel tempo. "
                }
              </p>{" "}
            </article>{" "}
            <article className="service-card">
              {" "}
              <span className="tag">{"Sobrietà"}</span>{" "}
              <h3>{"Opere cimiteriali"}</h3>{" "}
              <p className="copy">
                {
                  "Realizzazione di spazi dedicati alla memoria, con attenzione, rispetto e cura dei dettagli. "
                }
              </p>{" "}
            </article>{" "}
            <article className="service-card">
              {" "}
              <span className="tag">{"Outdoor"}</span> <h3>{"Piscine"}</h3>{" "}
              <p className="copy">
                {
                  "Progettazione, realizzazione e manutenzione di spazi ricreativi sicuri e funzionali."
                }
              </p>{" "}
            </article>{" "}
          </div>{" "}
        </section>{" "}
        <section className="split-photo">
          {" "}
          <div
            className="photo-side"
            role="img"
            aria-label="Cantiere edilizia civile"
          ></div>{" "}
          <div className="process-side">
            {" "}
            <span className="eyebrow" style={{ color: "var(--wine)" }}>
              {"Metodo di lavoro"}
            </span>{" "}
            <h2 className="section-heading">{"Un processo chiaro"}</h2>{" "}
            <p className="copy">
              {
                "Ogni intervento viene organizzato per ridurre incertezze, coordinare le fasi operative e mantenere il controllo su qualità, tempi e sicurezza."
              }
            </p>{" "}
            <div className="steps">
              {" "}
              <div className="step">
                <strong>{"Sopralluogo e valutazione"}</strong>
                <span>
                  {
                    "Analisi dello stato dei luoghi e delle necessità del cliente."
                  }
                </span>
              </div>{" "}
              <div className="step">
                <strong>{"Pianificazione del cantiere"}</strong>
                <span>
                  {
                    "Definizione di lavorazioni, mezzi, materiali e sequenza degli interventi."
                  }
                </span>
              </div>{" "}
              <div className="step">
                <strong>{"Esecuzione e controllo"}</strong>
                <span>
                  {
                    "Realizzazione delle opere con verifiche progressive durante le fasi di lavoro."
                  }
                </span>
              </div>{" "}
              <div className="step">
                <strong>{"Consegna e assistenza"}</strong>
                <span>
                  {
                    "Chiusura dell’intervento e supporto per eventuali esigenze successive."
                  }
                </span>
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
      </main>
    </SiteLayout>
  );
}
