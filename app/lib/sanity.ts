import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-03-13', // Use current date YYYY-MM-DD
  useCdn: true,
  token: process.env.SANITY_API_TOKEN
}); 