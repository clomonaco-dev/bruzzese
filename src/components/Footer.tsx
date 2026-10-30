import ContactForm from "./ContactForm";
import { useEffect, useState } from "react";
export default function Footer() {
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => setYear(new Date().getFullYear()), []);
  return (
    <footer className="footer" id="contatti">
      {" "}
      <div className="footer-main">
        {" "}
        <section>
          {" "}
          <img
            className="footer-logo"
            src="/img/logo-foot.svg"
            alt="Costruzioni Bruzzese S.r.l."
          />{" "}
          <div className="contact-list">
            {" "}
            <p>
              <strong>{"Bruzzese Raimondo"}</strong>
              <a href="tel:+393355930037">{"335 5930037"}</a>
            </p>{" "}
            <p>
              <strong>{"Geom. Bruzzese Denis"}</strong>
              <a href="tel:+393484277541">{"348 4277541"}</a>
            </p>{" "}
            <p>
              <strong>{"Email"}</strong>
              <a href="mailto:costruzionibruzzesesrl@gmail.com">
                {"costruzionibruzzesesrl@gmail.com"}
              </a>
              <br />
              <a href="mailto:costruzionibruzzesesrl@legalmail.it">
                {"costruzionibruzzesesrl@legalmail.it"}
              </a>
            </p>{" "}
            <p>
              <strong>{"Sede"}</strong>
              <a
                href="https://maps.app.goo.gl/aqRvVbtZg5574CuH9"
                target="_blank"
                rel="noopener"
              >
                {"Via dei Martiri delle Foibe 7 - Gozzano"}
              </a>
            </p>{" "}
          </div>{" "}
        </section>{" "}
        <section>
          {" "}
          <span className="eyebrow">{"Contatti"}</span>{" "}
          <h2 className="section-title">{"Scrivici"}</h2>{" "}
          <ContactForm>
            <input type="hidden" name="form-name" value="contatti" />{" "}
            <div className="form-grid">
              {" "}
              <input type="text" name="nome" placeholder="Nome" required />{" "}
              <input type="text" name="cognome" placeholder="Cognome" />{" "}
              <input type="email" name="email" placeholder="Mail" required />{" "}
              <input type="tel" name="telefono" placeholder="Telefono" />{" "}
              <textarea
                className="wide"
                name="messaggio"
                placeholder="Messaggio"
                required
              ></textarea>{" "}
              <label
                className="wide"
                style={{
                  display: "flex",
                  gap: ".65rem",
                  alignItems: "flex-start",
                  fontSize: ".95rem",
                  lineHeight: "1.45",
                }}
              >
                {" "}
                <input
                  type="checkbox"
                  name="privacy"
                  value="accept"
                  required
                  style={{ width: "auto", marginTop: ".25rem" }}
                />{" "}
                <span>
                  {"Dichiaro di aver letto l’"}
                  <a
                    href="https://www.iubenda.com/privacy-policy/65896961"
                    className="iubenda-nostyle no-brand iubenda-noiframe iubenda-embed"
                    title="Privacy Policy"
                  >
                    {"informativa privacy"}
                  </a>
                  {
                    " ed esprimo il consenso al trattamento dei dati per le finalità indicate."
                  }
                </span>{" "}
              </label>{" "}
              <button className="btn-primary" type="submit">
                {"Invia richiesta"}
              </button>{" "}
            </div>{" "}
          </ContactForm>{" "}
        </section>{" "}
      </div>{" "}
      <div className="footer-bottom">
        {" Costruzioni Bruzzese S.r.l | Copyright © "}
        <span id="currentYear">{year}</span>
        {
          " | P.IVA: 02087060030 | REA: NO-214636 | Sede Legale: Via Martiri Delle Foibe 7 - 28024 - Gozzano (NO) | Capitale Sociale: 10.000,00 € | "
        }
        <a
          href="https://www.iubenda.com/privacy-policy/65896961"
          className="iubenda-nostyle no-brand iubenda-noiframe iubenda-embed"
        >
          {"Privacy Policy"}
        </a>
        {" | "}
        <a
          href="https://www.iubenda.com/privacy-policy/65896961/cookie-policy"
          className="iubenda-nostyle no-brand iubenda-noiframe iubenda-embed"
        >
          {"Cookie Policy"}
        </a>
        {" | "}
        <a href="#" className="iubenda-cs-preferences-link">
          {"Le tue preferenze relative alla privacy"}
        </a>{" "}
      </div>{" "}
    </footer>
  );
}
