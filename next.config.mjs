/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 828, 1080, 1440, 1920, 2560],
  },
  async rewrites() {
    return [
      { source: "/index.html", destination: "/" },
      ...["civile", "industriale", "vendite"].map((name) => ({
        source: `/${name}.html`,
        destination: `/${name}`,
      })),
    ];
  },
  async redirects() {
    return [
      { source: "/edilizia-civile.html", destination: "/civile.html", permanent: true },
      { source: "/edilizia-industriale.html", destination: "/industriale.html", permanent: true },
      { source: "/villetta-curva.html", destination: "/vendite.html", permanent: true },
    ];
  },
};
export default nextConfig;
