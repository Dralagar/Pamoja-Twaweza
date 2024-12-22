"use client";

import { useEffect, useState } from 'react';
import { createClient } from 'next-sanity';
import Image from "next/image"
import Link from "next/link"

interface Post {
  _id: string;
  title: string;
  slug: string;
  mainImage?: {
    asset: {
      _ref: string;
    };
  };
  publishedAt: string;
  excerpt: string;
}

const client = createClient({
  projectId: 'yourProjectId',
  dataset: 'yourDataset',
  useCdn: true,
});

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await client.fetch(`*[_type == "post" && defined(publishedAt) && !(_id in path("drafts.**"))]`);
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: Post) => (
            <article key={post._id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48 w-full">
                {/* Render post content here */}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
} 