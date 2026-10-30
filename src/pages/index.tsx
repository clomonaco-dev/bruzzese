import SiteLayout from "../components/SiteLayout";
import WorkSlider from "../components/WorkSlider";
export default function Page() {
  return (
    <SiteLayout
      title="Costruzioni Bruzzese S.r.l. | Impresa edile a Gozzano"
      description="Costruzioni Bruzzese S.r.l. è un'impresa edile di Gozzano (NO), attiva dal 1986 in edilizia civile, industriale, ristrutturazioni e servizi per privati, aziende ed enti pubblici."
      styles={[
        "css/bootstrap.css",
        "css/jquery.fancybox.min.css",
        "css/style.css",
        "css/dashboard.css",
        "/assets/fontawesome/css/all.min.css",
      ]}
      gallery={true}
      property={false}
      consent={true}
      canonical="https://costruzionibruzzesesrl.it/"
    >
      <main>
        {" "}
        <section className="hero">
          {" "}
          <div className="hero-copy">
            {" "}
            <span className="eyebrow">{"Impresa edile a Gozzano"}</span>{" "}
            <h1>{"Costruire bene, da generazioni."}</h1>{" "}
            <p>
              {
                "Costruzioni Bruzzese S.r.l. opera in edilizia civile e industriale con un approccio concreto, familiare e orientato alla qualità del cantiere."
              }
            </p>{" "}
            <div className="hero-actions">
              {" "}
              <a className="button primary" href="#contatti">
                {"Richiedi informazioni"}
              </a>{" "}
              <a className="button light" href="#lavori">
                {"Guarda i lavori"}
              </a>{" "}
            </div>{" "}
          </div>{" "}
          <div
            className="hero-media"
            aria-label="Cantiere e realizzazioni Costruzioni Bruzzese"
          ></div>{" "}
        </section>{" "}
        <section className="stats-strip" aria-label="Informazioni principali">
          {" "}
          <div className="stat-box">
            <strong>{"1986"}</strong>
            <span>{"anno di fondazione"}</span>
          </div>{" "}
          <div className="stat-box">
            <strong>{"2"}</strong>
            <span>{"generazioni operative"}</span>
          </div>{" "}
          <div className="stat-box">
            <strong>{"OG1"}</strong>
            <span>{"edifici civili e industriali"}</span>
          </div>{" "}
          <div className="stat-box">
            <strong>{"OG3"}</strong>
            <span>{"strade, ponti e viabilità"}</span>
          </div>{" "}
        </section>{" "}
        <section className="section" id="storia">
          {" "}
          <div className="about-layout">
            {" "}
            <aside className="about-card">
              {" "}
              <img
                src="/img/sede.jpg"
                alt="Sede Costruzioni Bruzzese a Gozzano"
              />{" "}
              <p>{"Via dei Martiri delle Foibe 7, Gozzano (NO)"}</p>{" "}
            </aside>{" "}
            <div>
              {" "}
              <span className="eyebrow" style={{ color: "var(--wine)" }}>
                {"La nostra storia"}
              </span>{" "}
              <h2 className="section-title">{"Dalla famiglia al cantiere"}</h2>{" "}
              <div className="timeline">
                {" "}
                <article className="timeline-item">
                  {" "}
                  <h3>{"Le origini"}</h3>{" "}
                  <p className="text">
                    {
                      "La passione per l’edilizia nasce dall’esperienza trasmessa da Salvatore Bruzzese a suo figlio Raimondo, attraverso lavoro pratico, dedizione e conoscenza del mestiere."
                    }
                  </p>{" "}
                </article>{" "}
                <article className="timeline-item">
                  {" "}
                  <h3>{"1986"}</h3>{" "}
                  <p className="text">
                    {
                      "Raimondo Bruzzese fonda Costruzioni Bruzzese, costruendo negli anni una realtà orientata a serietà, qualità esecutiva e rapporto diretto con il cliente."
                    }
                  </p>{" "}
                </article>{" "}
                <article className="timeline-item">
                  {" "}
                  <h3>{"Oggi"}</h3>{" "}
                  <p className="text">
                    {
                      "Denis Bruzzese prosegue il percorso familiare, portando avanti la tradizione dell’impresa con competenze tecniche e attenzione alle nuove esigenze del settore."
                    }
                  </p>{" "}
                </article>{" "}
                <article className="timeline-item">
                  {" "}
                  <h3>{"Metodo"}</h3>{" "}
                  <p className="text">
                    {
                      "L’impresa interviene su nuove costruzioni, ristrutturazioni, manutenzioni e lavori per privati, aziende ed enti pubblici, scegliendo soluzioni adatte a ogni progetto."
                    }
                  </p>{" "}
                </article>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="section services">
          {" "}
          <span className="eyebrow">{"Aree di intervento"}</span>{" "}
          <h2 className="section-title">{"Cosa facciamo"}</h2>{" "}
          <div className="service-grid">
            {" "}
            <article
              className="service-card"
              style={{
                backgroundImage:
                  "url('img/gallery-civile/slider-civile/1.jpg')",
              }}
            >
              {" "}
              <div className="service-content">
                {" "}
                <h3>{"Edilizia civile"}</h3>{" "}
                <p className="text">
                  {
                    "Realizzazione e ristrutturazione di edifici destinati all’uso privato e pubblico, con attenzione a funzionalità, durata e qualità delle finiture."
                  }
                </p>{" "}
                <a className="button light" href="/civile.html">
                  {"Scopri di più"}
                </a>{" "}
              </div>{" "}
            </article>{" "}
            <article
              className="service-card"
              style={{
                backgroundImage:
                  "url('img/gallery-edilizia/slider-edilizia/1.jpg')",
              }}
            >
              {" "}
              <div className="service-content">
                {" "}
                <h3>{"Edilizia industriale"}</h3>{" "}
                <p className="text">
                  {
                    "Costruzione, manutenzione e modifica di spazi destinati ad attività industriali e logistiche, nel rispetto delle destinazioni d’uso."
                  }
                </p>{" "}
                <a className="button light" href="/industriale.html">
                  {"Scopri di più"}
                </a>{" "}
              </div>{" "}
            </article>{" "}
          </div>{" "}
        </section>{" "}
        <section className="gallery-section" id="lavori">
          {" "}
          <aside className="gallery-aside">
            {" "}
            <div>
              {" "}
              <span className="eyebrow" style={{ color: "var(--wine)" }}>
                {"Realizzazioni"}
              </span>{" "}
              <h2 className="section-title">{"Cantieri e dettagli"}</h2>{" "}
            </div>{" "}
            <p className="text">
              {
                " Una selezione di immagini dai lavori di edilizia civile e industriale. Clicca sulla foto centrale per aprire la galleria. "
              }
            </p>{" "}
          </aside>{" "}
          <WorkSlider />{" "}
        </section>{" "}
        <section className="section credentials">
          {" "}
          <article className="info-panel">
            {" "}
            <h3>{"Corsi e certificazioni"}</h3>{" "}
            <p className="text">
              {
                "L’impresa dispone di competenze operative per lavorazioni e mezzi specifici di cantiere."
              }
            </p>{" "}
            <div className="pill-list">
              {" "}
              <span className="pill">{"Macchine movimento terra"}</span>{" "}
              <span className="pill">{"Piattaforme mobili elevabili"}</span>{" "}
              <span className="pill">{"Carrelli elevatori telescopici"}</span>{" "}
              <span className="pill">{"Spazi confinanti"}</span>{" "}
              <span className="pill">{"Gru a torre"}</span>{" "}
              <span className="pill">{"Ponteggi"}</span>{" "}
            </div>{" "}
          </article>{" "}
          <article className="info-panel">
            {" "}
            <h3>{"Categorie e servizi"}</h3>{" "}
            <p className="text">
              <strong>{"OG1:"}</strong>
              {" edifici civili e industriali."}
            </p>{" "}
            <p className="text">
              <strong>{"OG3:"}</strong>
              {" strade, autostrade, ponti, viadotti, ferrovie, metropolitane."}
            </p>{" "}
            <div className="pill-list">
              {" "}
              <span className="pill">{"Pulizia delle strade"}</span>{" "}
              <span className="pill">{"Servizi invernali"}</span>{" "}
              <span className="pill">{"Operazioni cimiteriali"}</span>{" "}
            </div>{" "}
          </article>{" "}
        </section>{" "}
      </main>
    </SiteLayout>
  );
}
