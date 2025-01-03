import React from 'react';
import { createClient } from '@sanity/client';
import { urlFor } from './sanityImage'; // Assuming you have a utility for image URLs

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: process.env.SANITY_API_VERSION,
  useCdn: true,
});

export async function getServerSideProps() {
  const query = `*[_type == "post" && defined(publishedDate)]{
    _id,
    title,
    mainImage,
    author->{
      name
    },
    publishedDate,
    body
  } | order(publishedDate desc)`;
  const posts = await client.fetch(query);

  return {
    props: {
      posts,
    },
  };
}

function BlogPosts({ posts }) {
  return (
    <div>
      {posts.map(post => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <img src={urlFor(post.mainImage).url()} alt={post.title} />
          <p>{post.author.name}</p>
          {/* Render body content here */}
        </div>
      ))}
    </div>
  );
}

export default BlogPosts;
