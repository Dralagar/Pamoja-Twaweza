import { createClient } from 'next-sanity';
import { apiVersion } from '../env';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
}); 