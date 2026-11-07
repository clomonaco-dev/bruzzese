/**
 * Static export: `npm run build` writes plain HTML to `out/` (out/index.html,
 * out/civile.html, ...), served directly by Netlify without any server runtime.
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
    deviceSizes: [640, 828, 1080, 1440, 1920, 2560],
  },
};
export default nextConfig;
