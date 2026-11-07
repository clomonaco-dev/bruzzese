import LegalPage, { type LegalSection } from "../components/LegalPage";
import { COMPANY, LEGAL_UPDATED } from "../lib/company";

const ext = (href: string, label: string) => (
  <a href={href} target="_blank" rel="noopener">
    {label}
  </a>
);

const sections: LegalSection[] = [
  {
    id: "cosa-sono",
    title: "Cosa sono i cookie",
    body: (
      <p>
        I cookie sono piccoli file di testo che i siti visitati salvano sul dispositivo dell’utente, per
        poi rileggerli nelle visite successive. Strumenti analoghi sono il local storage del browser, i
        pixel e le tecniche di “fingerprinting”. Secondo l’art. 122 del Codice privacy e le Linee guida
        del Garante del 10 giugno 2021, i cookie e gli strumenti tecnici possono essere usati senza
        consenso; quelli di profilazione o di terze parti con finalità diverse richiedono invece il
        consenso preventivo dell’utente.
      </p>
    ),
  },
  {
    id: "questo-sito",
    title: "Cookie utilizzati da questo sito",
    body: (
      <>
        <p className="legal-highlight">
          Questo sito <strong>non installa cookie</strong> sul tuo dispositivo: né cookie tecnici, né
          cookie di profilazione, né cookie di terze parti. Per questo motivo non è presente un banner di
          richiesta del consenso.
        </p>
        <div className="legal-table-wrap">
          <table className="legal-table">
            <thead>
              <tr>
                <th scope="col">Categoria</th>
                <th scope="col">Presente</th>
                <th scope="col">Note</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cookie tecnici di sessione o funzionalità</td>
                <td>No</td>
                <td>Il sito non richiede login né memorizza preferenze</td>
              </tr>
              <tr>
                <td>Cookie analitici</td>
                <td>No</td>
                <td>Le statistiche sono raccolte senza cookie (vedi sotto)</td>
              </tr>
              <tr>
                <td>Cookie di profilazione e pubblicitari</td>
                <td>No</td>
                <td>Nessuna attività di profilazione o remarketing</td>
              </tr>
              <tr>
                <td>Cookie di terze parti (social, mappe, video)</td>
                <td>No</td>
                <td>Nessun contenuto di terzi incorporato nelle pagine</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    id: "statistiche",
    title: "Statistiche di visita senza cookie",
    body: (
      <>
        <p>
          Per conoscere in forma aggregata l’uso del sito utilizziamo Umami, uno strumento di statistica
          open source installato su un server gestito dal nostro fornitore tecnico (CLM Automation), e non
          da piattaforme pubblicitarie. Lo strumento:
        </p>
        <ul>
          <li>non utilizza cookie e non salva identificativi sul tuo dispositivo;</li>
          <li>non conserva l’indirizzo IP in chiaro né altri dati che permettano di identificarti;</li>
          <li>
            raccoglie solo informazioni aggregate: pagine visitate, sito di provenienza, tipo di
            dispositivo e browser, lingua, dimensione dello schermo, paese;
          </li>
          <li>non incrocia i dati con altre fonti e non li cede a terzi;</li>
          <li>rispetta l’impostazione “Do Not Track” del browser: se è attiva, nessuna visita viene registrata.</li>
        </ul>
        <p>
          Lo script legge dal local storage del browser un’eventuale impostazione di esclusione
          (“umami.disabled”), senza scrivere alcun dato. Per queste caratteristiche lo strumento è
          assimilabile a quelli tecnici e non richiede il consenso, in linea con le Linee guida del
          Garante.
        </p>
      </>
    ),
  },
  {
    id: "risorse",
    title: "Font, immagini e video",
    body: (
      <p>
        Caratteri tipografici, immagini, video e documenti PDF sono pubblicati direttamente dal nostro
        sito tramite il servizio di hosting: la visualizzazione delle pagine non comporta collegamenti a
        servizi come Google Fonts, YouTube o Google Maps.
      </p>
    ),
  },
  {
    id: "link-esterni",
    title: "Collegamenti a servizi esterni",
    body: (
      <p>
        I pulsanti verso Instagram, WhatsApp e Google Maps sono semplici collegamenti. Facendo clic
        raggiungi il servizio esterno, che potrebbe utilizzare propri cookie secondo la propria
        informativa: {ext("https://privacycenter.instagram.com/policy", "Instagram")},{" "}
        {ext("https://www.whatsapp.com/legal/privacy-policy-eea", "WhatsApp")},{" "}
        {ext("https://policies.google.com/privacy", "Google")}.
      </p>
    ),
  },
  {
    id: "browser",
    title: "Gestire i cookie dal browser",
    body: (
      <>
        <p>
          Anche se questo sito non usa cookie, puoi in ogni momento consultare, bloccare o cancellare i
          cookie memorizzati sul tuo dispositivo dalle impostazioni del browser:
        </p>
        <ul>
          <li>{ext("https://support.google.com/chrome/answer/95647", "Google Chrome")}</li>
          <li>{ext("https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox-desktop", "Mozilla Firefox")}</li>
          <li>{ext("https://support.apple.com/it-it/guide/safari/sfri11471/mac", "Apple Safari")}</li>
          <li>{ext("https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09", "Microsoft Edge")}</li>
        </ul>
      </>
    ),
  },
  {
    id: "titolare",
    title: "Titolare e diritti",
    body: (
      <p>
        Il Titolare del trattamento è {COMPANY.name}, {COMPANY.address}, email{" "}
        <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>. Per le informazioni complete sul
        trattamento dei dati personali e sui tuoi diritti consulta la{" "}
        <a href="/privacy.html">Privacy policy</a>. Eventuali modifiche a questa pagina saranno
        pubblicate qui, con la data di aggiornamento indicata in alto; se in futuro venissero introdotti
        cookie che richiedono il consenso, il sito mostrerà prima un apposito banner.
      </p>
    ),
  },
];

export default function Page() {
  return (
    <LegalPage
      metaTitle="Cookie policy | Costruzioni Bruzzese S.r.l."
      description="Cookie policy del sito di Costruzioni Bruzzese S.r.l.: il sito non utilizza cookie e raccoglie solo statistiche anonime e aggregate."
      canonical={`${COMPANY.site}/cookie.html`}
      eyebrow="Informativa cookie"
      title="Cookie policy"
      updated={LEGAL_UPDATED}
      intro={
        <p>
          Questa pagina spiega quali cookie e strumenti di tracciamento sono utilizzati dal sito
          costruzionibruzzesesrl.it, ai sensi dell’art. 122 del D.Lgs. 196/2003, del Regolamento (UE)
          2016/679 e delle “Linee guida cookie e altri strumenti di tracciamento” del Garante per la
          protezione dei dati personali del 10 giugno 2021.
        </p>
      }
      sections={sections}
    />
  );
}
