import { createClient } from 'next-sanity';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-07-01';
const token = process.env.NEXT_PUBLIC_SANITY_TOKEN || '';
const useCdn = process.env.NEXT_PUBLIC_SANITY_CDN === 'true';

console.log('Sanity Config:', {
  projectId,
  dataset,
  apiVersion,
  useCdn,
  hasToken: !!token
});

export const client = createClient({
  projectId: projectId || 'boxgqwv2', // Fallback for dev
  dataset: dataset || 'production',   // Fallback for dev
  apiVersion,
  useCdn,
  token: token || undefined, // Only pass if exists
  perspective: 'published',
  stega: {
    enabled: process.env.NODE_ENV === 'development',
    studioUrl: '/studio'
  }
});