import { useEffect } from "react";

/** Elements that fade/slide in when they enter the viewport. */
const SELECTOR = [
  "[data-reveal]",
  ".section-head",
  ".reveal-group > *",
].join(",");

export default function useReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    elements.forEach((el) => {
      // Content already on screen is never hidden, so there is no flash on load.
      if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;
      const parent = el.parentElement;
      if (parent?.classList.contains("reveal-group")) {
        const index = Array.prototype.indexOf.call(parent.children, el);
        el.style.setProperty("--reveal-delay", `${Math.min(index, 6) * 90}ms`);
      }
      el.classList.add("reveal");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}
