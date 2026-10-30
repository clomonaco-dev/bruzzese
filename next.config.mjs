/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      { source: "/index.html", destination: "/" },
      ...["civile", "industriale", "vendite"].map((name) => ({
        source: `/${name}.html`,
        destination: `/${name}`,
      })),
      {
        source: "/.netlify/functions/google-reviews",
        destination: "/api/google-reviews",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/edilizia-civile.html",
        destination: "/civile.html",
        permanent: true,
      },
      {
        source: "/edilizia-industriale.html",
        destination: "/industriale.html",
        permanent: true,
      },
      {
        source: "/villetta-curva.html",
        destination: "/vendite.html",
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
