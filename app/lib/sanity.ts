import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2023-05-03',
  useCdn: false,
})

interface Post {
  _id: string;
  title: string;
  publishedAt: string;
  author?: {
    name: string;
    image?: any;
  };
  mainImage?: any;
  body: any[];
  slug: string;
  categories?: Array<{
    title: string;
    slug: string;
  }>;
}

export async function fetchPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc){
    _id,
    title,
    "slug": slug.current,
    mainImage,
    "publishedAt": coalesce(publishedAt, _createdAt),
    body,
    "excerpt": pt::text(body)[0..150],
    "author": author->{
      name,
      image
    },
    "categories": categories[]->{
      title,
      "slug": slug.current
    }
  }`;

  try {
    const posts = await client.fetch(query);
    console.log('Raw posts data:', JSON.stringify(posts, null, 2));
    
    // Ensure we have valid dates
    const postsWithDates = posts.map((post: Post) => {
      if (!post.publishedAt) {
        console.log('Post missing date:', post.title);
      }
      return {
        ...post,
        publishedAt: post.publishedAt || new Date().toISOString() // Fallback to current date if missing
      };
    });
    
    console.log('Posts with dates:', postsWithDates.map((post: Post) => ({
      title: post.title,
      publishedAt: post.publishedAt,
      publishedAtType: typeof post.publishedAt
    })));
    
    return postsWithDates;
  } catch (error) {
    console.error("Error fetching posts from Sanity:", error);
    return [];
  }
} 