import LegalPage, { type LegalSection } from "../components/LegalPage";
import { COMPANY, LEGAL_UPDATED } from "../lib/company";

const mail = <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>;

const sections: LegalSection[] = [
  {
    id: "titolare",
    title: "Titolare del trattamento",
    body: (
      <>
        <p>Il Titolare del trattamento dei dati personali è:</p>
        <address className="legal-card">
          <strong>{COMPANY.name}</strong>
          <span>{COMPANY.address}</span>
          <span>{`P.IVA ${COMPANY.vat} · REA ${COMPANY.rea}`}</span>
          <span>
            {"Email: "}
            {mail}
          </span>
          <span>
            {"Telefono: "}
            <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>
          </span>
        </address>
        <p>
          Il Titolare non ha nominato un Responsabile della protezione dei dati (DPO), non ricorrendone
          gli obblighi previsti dall’art. 37 del Regolamento (UE) 2016/679. Per qualsiasi richiesta
          relativa ai tuoi dati puoi scrivere all’indirizzo email indicato sopra.
        </p>
      </>
    ),
  },
  {
    id: "dati",
    title: "Quali dati trattiamo",
    body: (
      <>
        <h3>Dati di navigazione</h3>
        <p>
          I sistemi informatici che fanno funzionare il sito acquisiscono, nel normale esercizio, alcuni
          dati la cui trasmissione è implicita nell’uso dei protocolli di comunicazione di Internet:
          indirizzo IP, data e ora della richiesta, pagina richiesta, codice di risposta del server, tipo
          di browser e sistema operativo. Questi dati sono registrati nei log tecnici del fornitore di
          hosting e servono esclusivamente a garantire il funzionamento e la sicurezza del sito.
        </p>
        <h3>Dati forniti volontariamente</h3>
        <p>
          Quando compili il modulo “Scrivici” ci comunichi nome, cognome (facoltativo), indirizzo email,
          numero di telefono (facoltativo) e il testo del messaggio. Analogamente, se ci contatti via
          email, telefono o WhatsApp tratteremo i dati che scegli di comunicarci (ad esempio recapiti,
          informazioni sull’immobile o sul lavoro richiesto). Ti chiediamo di non inserire nel messaggio
          dati appartenenti a categorie particolari (ad esempio dati relativi alla salute), che non sono
          necessari per rispondere alla tua richiesta.
        </p>
        <h3>Statistiche di visita</h3>
        <p>
          Per capire quali pagine sono più consultate utilizziamo uno strumento di statistica che non
          usa cookie, non conserva l’indirizzo IP in chiaro e produce esclusivamente dati aggregati
          (numero di visite, pagine viste, provenienza, tipo di dispositivo e lingua del browser). Questi
          dati non ci permettono di identificarti. Maggiori dettagli sono nella{" "}
          <a href="/cookie.html">Cookie policy</a>.
        </p>
      </>
    ),
  },
  {
    id: "finalita",
    title: "Finalità, basi giuridiche e conservazione",
    body: (
      <>
        <p>
          Trattiamo i dati solo per le finalità indicate di seguito, ciascuna fondata su una base
          giuridica prevista dall’art. 6 del GDPR, e li conserviamo per il tempo strettamente necessario.
        </p>
        <div className="legal-table-wrap">
          <table className="legal-table">
            <thead>
              <tr>
                <th scope="col">Finalità</th>
                <th scope="col">Base giuridica</th>
                <th scope="col">Conservazione</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rispondere alle richieste di informazioni, sopralluoghi o preventivi inviate tramite modulo, email, telefono o WhatsApp</td>
                <td>Esecuzione di misure precontrattuali adottate su tua richiesta (art. 6.1.b GDPR)</td>
                <td>Per il tempo necessario a gestire la richiesta e comunque non oltre 24 mesi dall’ultimo contatto, se non segue un rapporto contrattuale</td>
              </tr>
              <tr>
                <td>Gestione del rapporto contrattuale, se affidi un lavoro all’impresa</td>
                <td>Esecuzione del contratto (art. 6.1.b GDPR)</td>
                <td>Per la durata del contratto e successivamente per i termini di prescrizione dei diritti (10 anni)</td>
              </tr>
              <tr>
                <td>Adempimenti fiscali, contabili e di legge connessi al rapporto</td>
                <td>Obbligo legale (art. 6.1.c GDPR)</td>
                <td>10 anni, come previsto dall’art. 2220 del Codice civile</td>
              </tr>
              <tr>
                <td>Funzionamento e sicurezza del sito, prevenzione di abusi e spam</td>
                <td>Legittimo interesse del Titolare (art. 6.1.f GDPR)</td>
                <td>Log tecnici per il periodo previsto dal fornitore di hosting, di norma non oltre 30 giorni, salvo necessità di accertamento di illeciti</td>
              </tr>
              <tr>
                <td>Statistiche aggregate e anonime sull’uso del sito</td>
                <td>Legittimo interesse del Titolare a migliorare il sito (art. 6.1.f GDPR)</td>
                <td>Solo dati aggregati, non riconducibili a persone identificate</td>
              </tr>
              <tr>
                <td>Accertamento, esercizio o difesa di un diritto in sede giudiziaria</td>
                <td>Legittimo interesse del Titolare (art. 6.1.f GDPR)</td>
                <td>Per la durata dell’eventuale contenzioso e fino all’esaurimento dei termini di impugnazione</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Il Titolare non utilizza i tuoi dati per finalità di marketing, non invia newsletter e non
          effettua attività di profilazione. Al termine dei periodi indicati i dati vengono cancellati o
          resi anonimi.
        </p>
      </>
    ),
  },
  {
    id: "conferimento",
    title: "Obbligatorietà del conferimento",
    body: (
      <p>
        Il conferimento dei dati di navigazione è necessario per la consultazione del sito. Il conferimento
        dei dati richiesti dal modulo di contatto è facoltativo, ma i campi contrassegnati con l’asterisco
        (nome, email, messaggio) sono indispensabili per poterti rispondere: senza di essi non potremo
        dare seguito alla tua richiesta. I campi cognome e telefono sono facoltativi.
      </p>
    ),
  },
  {
    id: "modalita",
    title: "Modalità del trattamento e sicurezza",
    body: (
      <p>
        I dati sono trattati con strumenti elettronici e, ove necessario, cartacei, da personale
        autorizzato e istruito ai sensi dell’art. 29 del GDPR e dell’art. 2-quaterdecies del Codice
        privacy. Adottiamo misure tecniche e organizzative adeguate al rischio (art. 32 GDPR): il sito è
        servito esclusivamente tramite connessione cifrata HTTPS, l’accesso ai dati è limitato alle
        persone che ne hanno bisogno per svolgere il proprio lavoro e i fornitori sono selezionati tra
        operatori che offrono garanzie sufficienti di sicurezza.
      </p>
    ),
  },
  {
    id: "destinatari",
    title: "A chi comunichiamo i dati",
    body: (
      <>
        <p>
          I dati non sono diffusi né venduti. Possono essere trattati, esclusivamente per le finalità
          sopra indicate, dai seguenti soggetti:
        </p>
        <ul>
          <li>
            <strong>Netlify, Inc.</strong> (San Francisco, USA) – fornitore del servizio di hosting del sito
            e di raccolta dei messaggi inviati dal modulo di contatto, inclusi i relativi filtri antispam;
            agisce come Responsabile del trattamento ai sensi dell’art. 28 GDPR.
          </li>
          <li>
            <strong>Google Ireland Ltd</strong> – fornitore del servizio di posta elettronica con cui
            riceviamo e gestiamo le email; agisce come Responsabile del trattamento.
          </li>
          <li>
            <strong>CLM Automation</strong> – fornitore dei servizi di sviluppo e manutenzione del sito e
            dello strumento di statistica anonima; agisce come Responsabile del trattamento.
          </li>
          <li>
            Consulenti fiscali, contabili e legali, istituti bancari e professionisti tecnici coinvolti nel
            lavoro, nei limiti necessari alla gestione del rapporto contrattuale.
          </li>
          <li>Autorità pubbliche e giudiziarie, quando la comunicazione è prevista dalla legge.</li>
        </ul>
        <p>L’elenco aggiornato dei Responsabili del trattamento può essere richiesto scrivendo a {mail}.</p>
      </>
    ),
  },
  {
    id: "trasferimento",
    title: "Trasferimento dei dati fuori dall’UE",
    body: (
      <p>
        Alcuni fornitori (in particolare Netlify, Inc. e, per alcune componenti del servizio email, il
        gruppo Google) possono trattare dati negli Stati Uniti. Tali trasferimenti avvengono sulla base
        della decisione di adeguatezza della Commissione europea relativa all’EU-US Data Privacy
        Framework (art. 45 GDPR), per i fornitori certificati, e in ogni caso delle Clausole contrattuali
        standard approvate dalla Commissione europea (art. 46 GDPR). Puoi ottenere informazioni sulle
        garanzie adottate scrivendo a {mail}.
      </p>
    ),
  },
  {
    id: "terze-parti",
    title: "Collegamenti a siti e servizi di terzi",
    body: (
      <>
        <p>
          Il sito contiene semplici collegamenti a servizi esterni: Instagram e WhatsApp (Meta Platforms
          Ireland Ltd) e Google Maps (Google Ireland Ltd). Il sito non incorpora contenuti, pulsanti
          social o mappe di questi servizi: nessun dato viene trasmesso a tali soggetti finché non fai
          clic sul collegamento.
        </p>
        <p>
          Una volta raggiunto il servizio esterno, il trattamento dei dati è effettuato dal rispettivo
          gestore secondo la propria informativa, che ti invitiamo a consultare. Se ci scrivi tramite
          WhatsApp o Instagram, i messaggi transitano anche sui sistemi di Meta.
        </p>
      </>
    ),
  },
  {
    id: "diritti",
    title: "I tuoi diritti",
    body: (
      <>
        <p>In qualsiasi momento, ai sensi degli artt. 15–22 del GDPR, hai il diritto di:</p>
        <ul>
          <li><strong>accesso</strong>: sapere se trattiamo tuoi dati e ottenerne copia;</li>
          <li><strong>rettifica</strong>: correggere dati inesatti o integrare dati incompleti;</li>
          <li><strong>cancellazione</strong>: ottenere la cancellazione dei dati, nei casi previsti dall’art. 17;</li>
          <li><strong>limitazione</strong>: chiedere che il trattamento sia limitato, nei casi previsti dall’art. 18;</li>
          <li><strong>portabilità</strong>: ricevere i dati che ci hai fornito in un formato strutturato e leggibile da dispositivo automatico;</li>
          <li><strong>opposizione</strong>: opporti ai trattamenti basati sul legittimo interesse, per motivi connessi alla tua situazione particolare;</li>
          <li><strong>revoca del consenso</strong>: ove un trattamento si basi sul consenso, revocarlo in ogni momento, senza pregiudicare la liceità del trattamento svolto prima della revoca.</li>
        </ul>
        <p>
          Per esercitare i tuoi diritti scrivi a {mail}. Risponderemo senza ingiustificato ritardo e
          comunque entro un mese dal ricevimento della richiesta, termine prorogabile di due mesi nei casi
          di particolare complessità (art. 12 GDPR). L’esercizio dei diritti è gratuito; potremo chiederti
          informazioni utili a verificare la tua identità.
        </p>
      </>
    ),
  },
  {
    id: "reclamo",
    title: "Reclamo all’Autorità di controllo",
    body: (
      <p>
        Se ritieni che il trattamento dei tuoi dati violi la normativa, hai il diritto di proporre reclamo
        al Garante per la protezione dei dati personali (Piazza Venezia 11, 00187 Roma –{" "}
        <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener">
          www.garanteprivacy.it
        </a>
        ) ai sensi dell’art. 77 GDPR, oppure di adire l’autorità giudiziaria competente.
      </p>
    ),
  },
  {
    id: "decisioni",
    title: "Processi decisionali automatizzati",
    body: (
      <p>
        Il Titolare non adotta processi decisionali basati unicamente su trattamenti automatizzati,
        compresa la profilazione, che producano effetti giuridici o incidano in modo analogo
        significativamente sulla tua persona (art. 22 GDPR).
      </p>
    ),
  },
  {
    id: "minori",
    title: "Minori",
    body: (
      <p>
        Il sito e il modulo di contatto sono rivolti a persone maggiorenni. Non raccogliamo
        consapevolmente dati di minori di 14 anni (art. 2-quinquies del Codice privacy); se ritieni che
        un minore ci abbia inviato dati personali, scrivici e provvederemo a cancellarli.
      </p>
    ),
  },
  {
    id: "modifiche",
    title: "Modifiche all’informativa",
    body: (
      <p>
        Questa informativa può essere aggiornata, ad esempio in seguito a modifiche normative o
        all’introduzione di nuovi servizi sul sito. La versione in vigore è sempre pubblicata su questa
        pagina, con la data dell’ultimo aggiornamento indicata in alto.
      </p>
    ),
  },
];

export default function Page() {
  return (
    <LegalPage
      metaTitle="Privacy policy | Costruzioni Bruzzese S.r.l."
      description="Informativa sul trattamento dei dati personali di Costruzioni Bruzzese S.r.l. ai sensi degli artt. 13 e 14 del Regolamento (UE) 2016/679 (GDPR)."
      canonical={`${COMPANY.site}/privacy.html`}
      eyebrow="Informativa privacy"
      title="Privacy policy"
      updated={LEGAL_UPDATED}
      intro={
        <p>
          Questa informativa descrive come {COMPANY.name} tratta i dati personali di chi visita il sito{" "}
          <a href={COMPANY.site}>costruzionibruzzesesrl.it</a> e di chi ci contatta, ai sensi degli artt.
          13 e 14 del Regolamento (UE) 2016/679 (“GDPR”) e del D.Lgs. 196/2003 (“Codice privacy”), come
          modificato dal D.Lgs. 101/2018. L’informativa riguarda solo questo sito e non altri siti
          raggiungibili tramite collegamenti.
        </p>
      }
      sections={sections}
    />
  );
}
