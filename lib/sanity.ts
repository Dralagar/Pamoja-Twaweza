import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "boxgqwv2", // Replace with your Sanity Project ID
  dataset: "production", // or your dataset name
  apiVersion: "2024-03-27", // Use the latest API version
  useCdn: true, // Enables CDN caching for faster response
});

export async function fetchPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc){
    _id,
    title,
    "slug": slug.current,
    "mainImage": mainImage.asset->url,
    publishedAt,
    "excerpt": pt::text(body)[0..150] // Extract the first 150 characters from body
  }`;

  try {
    return await sanityClient.fetch(query);
  } catch (error) {
    console.error("Error fetching posts from Sanity:", error);
    return [];
  }
} 