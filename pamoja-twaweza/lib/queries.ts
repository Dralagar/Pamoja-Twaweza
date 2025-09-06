// lib/sanity/queries.ts

import { defineLive } from 'next-sanity';
import { client } from './client';
import { apiVersion } from '../env';

// LIVE PREVIEW SETUP (Optional: only needed if using Sanity Live mode)
export const { sanityFetch, SanityLive } = defineLive({
  client: client.withConfig({
    apiVersion, // This must match your sanity project's API version (e.g., '2023-10-01')
  }),
});

// QUERY: All Published Blog Posts
export const blogPostsQuery = `
  *[_type == "post" && defined(slug.current) && publishedAt < now()] | order(publishedAt desc){
    _id,
    title,
    slug,
    mainImage,
    body,
    authorName,
    authorImage,
    publishedAt
  }
`;

// FUNCTION: Fetch Single Post by Slug
export async function getPost(slug: string) {
  if (!slug) {
    throw new Error('Slug parameter is required');
  }

  const query = `
    *[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      mainImage,
      body,
      publishedAt,
      author->{
        name,
        image
      },
      categories[]->{
        title
      }
    }
  `;

  const params = { slug };

  const post = await client.fetch(query, params);
  return post;
}
