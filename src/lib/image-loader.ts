/**
 * Images are resized by the Netlify Image CDN (AVIF/WebP chosen automatically).
 * In development the original file is served.
 */
export default function imageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  if (process.env.NODE_ENV === "development") return `${src}?w=${width}`;
  const params = new URLSearchParams({ url: src, w: String(width), q: String(quality || 75) });
  return `/.netlify/images?${params}`;
}
