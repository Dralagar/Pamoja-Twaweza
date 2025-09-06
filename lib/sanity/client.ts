// lib/client.ts
import { createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';

// Debug: check if environment variables are loading
console.log('Project ID:', process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
console.log('Dataset:', process.env.NEXT_PUBLIC_SANITY_DATASET);

// Use fallback values to prevent runtime errors
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'boxgqwv2';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-07-01';

export const client = createClient({
  projectId,
  dataset,
  useCdn: true,
  apiVersion,
});

export const urlFor = (source: any) => {
  return createImageUrlBuilder(client).image(source);
};