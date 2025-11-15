import client from './sanity';

export async function getPost(slug: string) {
  if (!slug) {
    throw new Error('Slug parameter is required');
  }

  const query = `
    *[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      mainImage,
      body,
      slug,
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
