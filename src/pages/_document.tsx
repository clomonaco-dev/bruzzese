import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="it">
      <Head>
        <meta name="theme-color" content="#121418" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/fav32.png" />
        <link rel="icon" type="image/png" sizes="72x72" href="/favicon/fav72.png" />
        <link rel="apple-touch-icon" href="/favicon/fav114.png" />
      </Head>
      <body>
        {/* Marks JS as available before first paint so reveal animations never hide content without JS. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
