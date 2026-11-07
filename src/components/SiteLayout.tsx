import Head from "next/head";
import Script from "next/script";
import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import FloatingSocial from "./FloatingSocial";
import GalleryPlugins from "./GalleryPlugins";
import useReveal from "./useReveal";

const SITE = "https://costruzionibruzzesesrl.it";

type Props = {
  children: ReactNode;
  title: string;
  description: string;
  canonical: string;
  page: "home" | "civile" | "industriale" | "vendite";
  ogImage: string;
  gallery?: boolean;
  property?: boolean;
  consent?: boolean;
};

const organization = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "Costruzioni Bruzzese S.r.l.",
  url: `${SITE}/`,
  logo: `${SITE}/img/logo-foot.svg`,
  image: `${SITE}/img/sede.jpg`,
  foundingDate: "1986",
  telephone: "+39 348 4277541",
  email: "costruzionibruzzesesrl@gmail.com",
  vatID: "IT02087060030",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via dei Martiri delle Foibe 7",
    postalCode: "28024",
    addressLocality: "Gozzano",
    addressRegion: "NO",
    addressCountry: "IT",
  },
  sameAs: ["https://www.instagram.com/costruzionibruzzese/"],
};

export default function SiteLayout({
  children,
  title,
  description,
  canonical,
  page,
  ogImage,
  gallery,
  property,
  consent,
}: Props) {
  useReveal();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="it_IT" />
        <meta property="og:site_name" content="Costruzioni Bruzzese S.r.l." />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={`${SITE}${ogImage}`} />
        <meta name="twitter:card" content="summary_large_image" />
        {page === "home" && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
          />
        )}
      </Head>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-NQVSK7TF"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
      <a className="skip-link" href="#contenuto">
        Vai al contenuto
      </a>
      <div className={`site page-${page}`}>
        <Header />
        <div id="contenuto">{children}</div>
        <Footer />
      </div>
      <FloatingSocial />
      {gallery && <GalleryPlugins property={property} />}
      {consent && (
        <Script
          src="/js/iubenda-config.js"
          strategy="lazyOnload"
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
        strategy="afterInteractive"
      />
    </>
  );
}
