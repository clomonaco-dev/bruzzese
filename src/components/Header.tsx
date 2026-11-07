import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const links = [
  { href: "/index.html#storia", label: "Chi siamo", path: "" },
  { href: "/civile.html", label: "Edilizia civile", path: "/civile" },
  { href: "/industriale.html", label: "Edilizia industriale", path: "/industriale" },
  { href: "/vendite.html", label: "Vendite", path: "/vendite" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("menu-locked", open);
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`topbar${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}>
      <div className="topbar-inner">
        <a className="brand" href="/index.html" aria-label="Costruzioni Bruzzese S.r.l. – Home">
          <img src="/img/logo.svg" alt="Costruzioni Bruzzese S.r.l." width={620} height={141} />
        </a>
        <button
          className="menu-toggle"
          aria-controls="siteMenu"
          aria-expanded={open}
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          onClick={() => setOpen(!open)}
          type="button"
        >
          <span className="menu-toggle-label">{"Menu"}</span>
          <span className="menu-toggle-icon" aria-hidden="true">
            <span />
            <span />
          </span>
        </button>
        <nav id="siteMenu" className={open ? "menu is-open" : "menu"} aria-label="Navigazione principale">
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              aria-current={link.path && pathname === link.path ? "page" : undefined}
              style={{ ["--i" as string]: index }}
            >
              <span className="menu-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              {link.label}
            </a>
          ))}
          <a
            className="menu-cta"
            href="/index.html#contatti"
            onClick={close}
            style={{ ["--i" as string]: links.length }}
          >
            <span className="menu-index" aria-hidden="true">
              {"05"}
            </span>
            {"Contatti"}
          </a>
        </nav>
      </div>
    </header>
  );
}
