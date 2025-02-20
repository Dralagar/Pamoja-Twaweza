import { createClient } from 'next-sanity';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '', // Get from env
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || '', // Get from env
  apiVersion: '2024-03-13', // Use the current date in YYYY-MM-DD format
  useCdn: true, // Enable CDN for faster responses
});

export default client;