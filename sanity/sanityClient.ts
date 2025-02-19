import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from './env';

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  // End of Selection
  useCdn: false,
});
// The selected code is redundant and should be removed as it is already included in the createClient call above.