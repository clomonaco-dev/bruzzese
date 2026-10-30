import { useState, type FormEvent, type ReactNode } from "react";

export default function ContactForm({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending) return;
    const form = event.currentTarget;
    setSending(true);
    setStatus("");
    try {
      if (["localhost", "127.0.0.1"].includes(window.location.hostname)) throw new Error("local");
      const body = new URLSearchParams();
      new FormData(form).forEach((value, name) => body.append(name, String(value)));
      const response = await fetch("/__forms.html", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: body.toString() });
      if (!response.ok) throw new Error("submit");
      setStatus("Richiesta inviata. Grazie per averci contattato.");
      form.reset();
    } catch {
      setStatus("Invio non disponibile. Contattaci via email o telefono ai recapiti indicati.");
    } finally { setSending(false); }
  }
  return <form name="contatti" method="POST" action="/__forms.html" id="form" onSubmit={submit} aria-busy={sending}>
    {children}
    {status && <p role="status">{status}</p>}
  </form>;
}
