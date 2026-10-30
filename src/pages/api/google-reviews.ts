import type { NextApiRequest, NextApiResponse } from "next";
import getReviews from "../../../netlify/functions/google-reviews";

/** Node.js endpoint; preserves the response contract of the original function. */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Metodo non consentito" });
  }
  const response = await getReviews();
  res.setHeader("Content-Type", "application/json");
  return res.status(response.status).send(await response.text());
}
