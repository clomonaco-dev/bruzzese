import type { AppProps } from "next/app";
import { Cormorant_Garamond, Urbanist } from "next/font/google";
import "../styles/vendor/fancybox.css";
import "../styles/vendor/owl.carousel.css";
import "../styles/globals.css";
import "../styles/home.css";
import "../styles/civile.css";
import "../styles/industriale.css";
import "../styles/vendite.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});
const sans = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-serif: ${serif.style.fontFamily};
          --font-sans: ${sans.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
