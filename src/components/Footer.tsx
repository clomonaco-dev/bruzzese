import ContactForm from "./ContactForm";
import { useEffect, useState } from "react";

function Field({
  name,
  label,
  type = "text",
  required,
  wide,
  multiline,
  autoComplete,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  wide?: boolean;
  multiline?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className={`field${wide ? " wide" : ""}`}>
      {multiline ? (
        <textarea name={name} placeholder=" " required={required} rows={4} />
      ) : (
        <input type={type} name={name} placeholder=" " required={required} autoComplete={autoComplete} />
      )}
      <span className="field-label">
        {label}
        {required && <i aria-hidden="true"> *</i>}
      </span>
    </label>
  );
}

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => setYear(new Date().getFullYear()), []);
  return (
    <footer className="footer" id="contatti">
      <div className="footer-main">
        <section className="footer-info">
          <img
            className="footer-logo"
            src="/img/logo-foot.svg"
            alt="Costruzioni Bruzzese S.r.l."
            width={1531}
            height={194}
            loading="lazy"
          />
          <div className="contact-list">
            <p>
              <strong>{"Bruzzese Raimondo"}</strong>
              <a href="tel:+393355930037">{"335 5930037"}</a>
            </p>
            <p>
              <strong>{"Geom. Bruzzese Denis"}</strong>
              <a href="tel:+393484277541">{"348 4277541"}</a>
            </p>
            <p>
              <strong>{"Email"}</strong>
              <a href="mailto:costruzionibruzzesesrl@gmail.com">{"costruzionibruzzesesrl@gmail.com"}</a>
              <a href="mailto:costruzionibruzzesesrl@legalmail.it">{"costruzionibruzzesesrl@legalmail.it"}</a>
            </p>
            <p>
              <strong>{"Sede"}</strong>
              <a href="https://maps.app.goo.gl/aqRvVbtZg5574CuH9" target="_blank" rel="noopener">
                {"Via dei Martiri delle Foibe 7 - Gozzano"}
              </a>
            </p>
          </div>
        </section>
        <section className="footer-form">
          <span className="eyebrow">{"Contatti"}</span>
          <h2 className="section-title">{"Scrivici"}</h2>
          <ContactForm>
            <input type="hidden" name="form-name" value="contatti" />
            <div className="form-grid">
              <Field name="nome" label="Nome" required autoComplete="given-name" />
              <Field name="cognome" label="Cognome" autoComplete="family-name" />
              <Field name="email" label="Mail" type="email" required autoComplete="email" />
              <Field name="telefono" label="Telefono" type="tel" autoComplete="tel" />
              <Field name="messaggio" label="Messaggio" required wide multiline />
              <label className="consent wide">
                <input type="checkbox" name="privacy" value="accept" required />
                <span>
                  {"Dichiaro di aver letto l’"}
                  <a href="/privacy.html" target="_blank" rel="noopener" title="Privacy Policy">
                    {"informativa privacy"}
                  </a>
                  {" ed esprimo il consenso al trattamento dei dati per le finalità indicate."}
                </span>
              </label>
              <button className="button primary wide-mobile" type="submit">
                {"Invia richiesta"}
              </button>
            </div>
          </ContactForm>
        </section>
      </div>
      <div className="footer-bottom">
        <p>
          {"Costruzioni Bruzzese S.r.l | Copyright © "}
          <span id="currentYear">{year}</span>
          {
            " | P.IVA: 02087060030 | REA: NO-214636 | Sede Legale: Via Martiri Delle Foibe 7 - 28024 - Gozzano (NO) | Capitale Sociale: 10.000,00 €"
          }
        </p>
        <p className="footer-legal">
          <a href="/privacy.html">{"Privacy Policy"}</a>
          <a href="/cookie.html">{"Cookie Policy"}</a>
        </p>
      </div>
    </footer>
  );
}
