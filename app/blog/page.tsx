"use client";
import { useEffect, useState } from 'react';
import { createClient } from 'next-sanity';
import Image from "next/image";
import Link from "next/link";
import imageUrlBuilder from '@sanity/image-url';
import sanityConfig from '../../sanity.config';

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

const client = createClient(sanityConfig);
const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await client.fetch(`*[_type == "post" && defined(publishedAt) && !(_id in path("drafts.**"))]`);
        console.log("Fetched posts:", data);
        if (data.length === 0) {
          console.warn("No posts found.");
        }
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  if (posts.length === 0) {
    return <div className="text-center py-16">No posts available.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Welcome to Our Impact Story</h1>
        <h2 className="text-2xl text-center mb-8">Our Blog: Transformative Voices</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: Post) => (
            <article key={post._id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48 w-full">
                {post.mainImage && (
                  <Image
                    src={urlFor(post.mainImage.asset._ref).url()}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                  />
                )}
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold">{post.title}</h2>
                <p className="text-gray-700">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`}>
                  <a className="text-blue-500 hover:underline">Read more</a>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
} 