import { useEffect, useState } from "react";
export default function SoldNotice() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const show = () => setOpen(true);
    const key = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    if (document.readyState === "complete") show();
    else window.addEventListener("load", show);
    document.addEventListener("keydown", key);
    return () => {
      window.removeEventListener("load", show);
      document.removeEventListener("keydown", key);
    };
  }, []);
  return (
    <div
      className={open ? "sold-notice is-open" : "sold-notice"}
      onClick={(event) => {
        if (event.target === event.currentTarget) setOpen(false);
      }}
      id="soldModal"
      role="dialog"
      aria-modal="true"
    >
      {" "}
      <div className="sold-notice-card">
        {" "}
        <button
          className="sold-close"
          onClick={() => setOpen(false)}
          type="button"
          aria-label="Chiudi"
        >
          {"×"}
        </button>{" "}
        <span className="sold-kicker">{"Aggiornamento disponibilità"}</span>{" "}
        <h2>{"Villetta già venduta"}</h2>{" "}
        <p>
          {
            " Il progetto resta online come esempio delle nostre realizzazioni e come fonte di ispirazione. "
          }
        </p>{" "}
        <p>
          {
            " Stiamo preparando nuove proposte residenziali: torna presto o contattaci per ricevere aggiornamenti. "
          }
        </p>{" "}
        <div className="sold-actions" onClick={() => setOpen(false)}>
          {" "}
          <a href="#galleria">{"Guarda il progetto"}</a>{" "}
          <a href="#form">{"Richiedi informazioni"}</a>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
