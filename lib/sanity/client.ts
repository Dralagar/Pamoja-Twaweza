import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: 'boxgqwv2', // From your sanity.config.js
  dataset: 'production', // From your sanity.config.js
  apiVersion: '2023-05-03', // Use current UTC date - see "specifying API version"!
  useCdn: process.env.NODE_ENV === 'production', // Enable CDN in production
  token: process.env.SANITY_API_TOKEN, // Only if you want to update content with the client
});
