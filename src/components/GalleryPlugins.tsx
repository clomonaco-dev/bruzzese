import { useEffect } from "react";

// Preserve the branch's original gallery rendering and responsive settings.
const scripts = new Map<string, Promise<void>>();
function load(src: string) {
  if (!scripts.has(src))
    scripts.set(
      src,
      new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => resolve();
        script.onerror = () => {
          scripts.delete(src);
          reject(new Error(`Unable to load ${src}`));
        };
        document.body.appendChild(script);
      }),
    );
  return scripts.get(src)!;
}
type Carousel = {
  owlCarousel(options: object): void;
  trigger(event: string): void;
};
declare global {
  interface Window {
    jQuery: (selector: string) => Carousel;
  }
}
export default function GalleryPlugins({
  property = false,
}: {
  property?: boolean;
}) {
  useEffect(() => {
    let cancelled = false;
    let carousel: Carousel | undefined;
    async function initialize() {
      await load("/js/jquery.fancybox.min.js");
      if (!property || cancelled) return;
      await load("/js/jquery-3.7.0.min.js");
      await load("/js/owl.carousel.min.js");
      if (cancelled) return;
      carousel = window.jQuery(".property-carousel");
      carousel.owlCarousel({
        stagePadding: 30,
        loop: true,
        margin: 16,
        autoplay: true,
        autoplayTimeout: 4200,
        nav: false,
        dots: false,
        responsive: {
          0: { items: 1.05, stagePadding: 0 },
          800: { items: 1.55, stagePadding: 12 },
          1200: { items: 1.75, stagePadding: 30 },
        },
      });
    }
    initialize().catch(console.error);
    return () => {
      cancelled = true;
      carousel?.trigger("destroy.owl.carousel");
    };
  }, [property]);
  return null;
}
