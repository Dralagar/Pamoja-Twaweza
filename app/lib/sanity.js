import React, { useEffect, useState } from 'react';
import { client } from './sanity';

async function fetchPosts() {
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
  return await client.fetch(query);
}

function BlogPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const data = await fetchPosts();
      console.log("Fetched posts:", data);
      setPosts(data);
    }
    getPosts();
  }, []);

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
