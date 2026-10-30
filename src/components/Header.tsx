import { useState } from "react";
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="topbar">
      {" "}
      <a className="brand" href="/index.html">
        {" "}
        <img src="/img/logo.svg" alt="Costruzioni Bruzzese S.r.l." />{" "}
      </a>{" "}
      <button
        className="menu-toggle"
        aria-controls="siteMenu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        type="button"
      >
        {"Menu"}
      </button>{" "}
      <nav id="siteMenu" className={open ? "menu open is-open" : "menu"}>
        {" "}
        <a href="/index.html#storia">{"Chi siamo"}</a>{" "}
        <a href="/civile.html">{"Edilizia civile"}</a>{" "}
        <a href="/industriale.html">{"Edilizia industriale"}</a>{" "}
        <a href="/vendite.html">{"Vendite"}</a>{" "}
        <a href="/index.html#contatti">{"Contatti"}</a>{" "}
      </nav>{" "}
    </header>
  );
}
