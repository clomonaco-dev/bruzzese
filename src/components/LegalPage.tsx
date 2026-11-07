import type { ReactNode } from "react";
import SiteLayout from "./SiteLayout";

export type LegalSection = { id: string; title: string; body: ReactNode };

type Props = {
  title: string;
  metaTitle: string;
  description: string;
  canonical: string;
  eyebrow: string;
  updated: string;
  intro: ReactNode;
  sections: LegalSection[];
};

/** Long-form legal page (privacy, cookie): dark header, sticky index, readable article. */
export default function LegalPage({
  title,
  metaTitle,
  description,
  canonical,
  eyebrow,
  updated,
  intro,
  sections,
}: Props) {
  return (
    <SiteLayout title={metaTitle} description={description} page="legal" ogImage="/img/head.jpg" canonical={canonical}>
      <main>
        <header className="legal-hero">
          <div className="legal-hero-inner hero-enter">
            <span className="eyebrow">{eyebrow}</span>
            <h1>{title}</h1>
            <p className="legal-updated">{`Ultimo aggiornamento: ${updated}`}</p>
          </div>
        </header>

        <div className="legal-layout">
          <nav className="legal-toc" aria-label="Indice">
            <span className="legal-toc-title">{"Indice"}</span>
            <ol>
              {sections.map((section, index) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <article className="legal-article">
            <div className="legal-intro">{intro}</div>
            {sections.map((section, index) => (
              <section key={section.id} id={section.id} className="legal-section">
                <h2>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {section.title}
                </h2>
                {section.body}
              </section>
            ))}
          </article>
        </div>
      </main>
    </SiteLayout>
  );
}
