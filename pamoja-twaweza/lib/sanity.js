import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-04-10',
  useCdn: true, // `false` if you want to ensure fresh data
});

export default client;
