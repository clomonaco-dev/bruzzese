import Head from "next/head";
import Script from "next/script";
import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import FloatingSocial from "./FloatingSocial";
import GalleryPlugins from "./GalleryPlugins";

type Props = {
  children: ReactNode;
  title: string;
  description: string;
  styles: string[];
  canonical: string;
  gallery?: boolean;
  property?: boolean;
  consent?: boolean;
};
export default function SiteLayout({
  children,
  title,
  description,
  styles,
  canonical,
  gallery,
  property,
  consent,
}: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <link rel="apple-touch-icon" href="/favicon/fav32.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/fav32.png"
        />
        {styles.map((href) => (
          <link
            key={href}
            href={href.startsWith("/") ? href : `/${href}`}
            rel="stylesheet"
          />
        ))}
      </Head>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-NQVSK7TF"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
      <FloatingSocial />
      <div id="header-placeholder">
        <Header />
      </div>
      {children}
      <div id="footer-placeholder">
        <Footer />
      </div>
      {gallery && <GalleryPlugins property={property} />}
      {consent && (
        <Script
          src="/js/iubenda-config.js"
          onLoad={() => {
            if (document.getElementById("iubenda-widget")) return;
            const script = document.createElement("script");
            script.id = "iubenda-widget";
            script.src =
              "https://embeds.iubenda.com/widgets/7c09c1e4-9b62-4005-b5e1-225e9a032d2b.js";
            document.head.appendChild(script);
          }}
        />
      )}
      <Script
        src="https://analytics.clmautomation.it/script.js"
        data-website-id="62a6ae4e-a37e-405d-af54-bb50b91dd9b1"
      />
    </>
  );
}
