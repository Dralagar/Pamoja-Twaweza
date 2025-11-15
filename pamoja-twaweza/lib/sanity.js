// lib/sanityClient.ts
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-04-10",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN, // Optional for read-only
});

export default client;
