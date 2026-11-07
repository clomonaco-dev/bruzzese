import type { NextApiRequest, NextApiResponse } from "next";
import { getGoogleReviews } from "../../lib/google-reviews";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Metodo non consentito" });
  }
  const { status, body } = await getGoogleReviews();
  res.setHeader("Cache-Control", status === 200 ? "public, s-maxage=3600, stale-while-revalidate=86400" : "no-store");
  return res.status(status).json(body);
}
