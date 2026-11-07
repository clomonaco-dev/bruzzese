export type ReviewsResult = { status: number; body: unknown };

/** Fetch rating and reviews from Google Places (credentials read on the server only). */
export async function getGoogleReviews(): Promise<ReviewsResult> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return { status: 500, body: { error: "Variabili mancanti" } };
  }

  try {
    const url = `https://places.googleapis.com/v1/places/${placeId}?fields=displayName,rating,userRatingCount,reviews,googleMapsUri`;
    const res = await fetch(url, {
      headers: { "X-Goog-Api-Key": apiKey, "Content-Type": "application/json" },
    });
    const data = await res.json();

    if (!res.ok) {
      return {
        status: res.status,
        body: { error: data.error?.message || "Errore Google Places", details: data },
      };
    }

    type Review = {
      authorAttribution?: { displayName?: string };
      rating?: number;
      text?: { text?: string };
      relativePublishTimeDescription?: string;
    };

    return {
      status: 200,
      body: {
        rating: data.rating ?? 0,
        userRatingCount: data.userRatingCount ?? 0,
        googleMapsUri: data.googleMapsUri || "#",
        reviews: ((data.reviews as Review[]) || []).map((review) => ({
          author: review.authorAttribution?.displayName || "Cliente",
          rating: review.rating || 0,
          text: review.text?.text || "",
          publishedAt: review.relativePublishTimeDescription || "",
        })),
      },
    };
  } catch (err) {
    return { status: 500, body: { error: err instanceof Error ? err.message : "Errore" } };
  }
}
