# Costruzioni Bruzzese — Next.js, React e Node.js

Migrazione del sito del branch `v.2.0.0`. Le quattro pagine sono componenti React/TypeScript; CSS, immagini, testi e impostazioni responsive provengono da questo branch. Il sito viene eseguito dal server Node.js di Next.js, senza esportazione statica obbligatoria.

## Avvio

Node.js >= 20.9, consigliato Node.js 24 (vedi `.nvmrc`).

```sh
npm ci
npm run dev
```

Aprire http://localhost:3000.

Per la produzione:

```sh
npm run build
npm start
```

Il controllo dei tipi è disponibile con `npm run typecheck`.

## Struttura

- `src/pages`: home, civile, industriale, vendite; `_app.tsx` carica font (next/font: Cormorant Garamond + Urbanist) e tutti i CSS.
- `src/styles`: `globals.css` (design system: colori, tipografia, bottoni, header, footer, animazioni) e un file per pagina, con selettori limitati a `.page-home`, `.page-civile`, `.page-industriale`, `.page-vendite`. `vendor/` contiene i CSS di Fancybox e Owl Carousel.
- `src/components`: layout (SEO, Open Graph, dati strutturati), header con menu mobile a schermo intero, footer con form, social, slider, avviso di vendita, `useReveal` (animazioni allo scroll, disattivate con "riduci movimento").
- `src/lib/google-reviews.ts`: logica recensioni Google usata dall'endpoint `/api/google-reviews`.
- `public`: immagini, video, PDF, script Fancybox/Owl; `__forms.html` permette il rilevamento del modulo da parte di Netlify.
- `legacy/v2-original`: sorgenti originali, esclusi dal sito e dalla compilazione.

Le pagine hanno percorsi `/`, `/civile`, `/industriale`, `/vendite`. Le URL `.html` e i tre redirect storici rimangono funzionanti (gestiti in `next.config.mjs`). Le immagini principali passano da `next/image` (su Netlify: Netlify Image CDN, formati AVIF/WebP).

## Servizi esterni

Il modulo contatti continua a usare Netlify Forms: abilitarlo sul sito Netlify. Il form invia via fetch alla definizione statica `public/__forms.html`, con messaggi di successo/errore e protezione dagli invii duplicati. Un server Node.js autonomo non fornisce il servizio Netlify Forms: per inviare email fuori da Netlify occorre configurare un provider e un endpoint dedicato. In locale il form comunica che l'invio non è disponibile, senza simulare un invio riuscito.

Per le recensioni, copiare `.env.example` in `.env.local` e impostare `GOOGLE_PLACES_API_KEY` e `GOOGLE_PLACE_ID`. L'endpoint è `/api/google-reviews` (le variabili vanno impostate anche nelle Environment variables di Netlify). Le chiavi sono lette solo sul server. Nessuna chiave è inclusa nel repository.

Iubenda, analytics e i collegamenti esterni mantengono gli identificativi del sito originale. `netlify.toml` configura la build Next.js con output `.next`, runtime Node.js 24 e header di cache/sicurezza.

## Verifiche eseguite

- Build di produzione e controllo TypeScript superati.
- Otto screenshot completi confrontati: quattro pagine a 1440 e 390 pixel, identici pixel per pixel. Servizi esterni esclusi e animazioni fermate nelle stesse condizioni.
- Testi e dimensioni delle sezioni corrispondenti, nessuna immagine mancante o errore JavaScript nelle pagine controllate.
- Menu mobile, slider, apertura delle gallerie e chiusura della modale verificati.
- URL `.html` e redirect verificati sul server di produzione Node.js.
- Endpoint recensioni: risposta prevista senza credenziali e rifiuto dei metodi diversi da GET.

Non sono stati inviati messaggi reali né eseguita una pubblicazione online.

Riferimenti: [Next.js Pages Router](https://nextjs.org/docs/pages/getting-started/installation), [Netlify Forms con Next.js](https://docs.netlify.com/manage/forms/troubleshooting-tips/).
