"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchPosts } from "../../lib/sanity";
import { formatDate } from "../../lib/utils"; // Import the date formatting utility
import styles from "../styles/Blog.module.css";

// Define the Post interface
interface Post {
  _id: string;
  title: string;
  slug: string;
  mainImage?: string;
  publishedAt: string;
  excerpt: string;
  isFeatured?: boolean;
  category?: string;
  author?: { name: string }; // Include author if needed
}

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        // Mark first post as featured
        const postsWithFeatured = data.map((post: Post, index: number) => ({
          ...post,
          isFeatured: index === 0
        }));
        setPosts(postsWithFeatured);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    loadPosts();
  }, []);

  if (posts.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center p-8 max-w-2xl">
          <h2 className="text-2xl font-medium text-gray-600 mb-4">
            Our stories are brewing...
          </h2>
          <p className="text-gray-500">
            We're preparing some amazing content for you. Check back soon!
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Enhanced Header */}
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Impact Stories
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover transformative voices and insights that shape our community
          </p>
        </header>

        {/* Dynamic Grid */}
        <div className={styles["blog-grid"]}>
          {posts.map((post) => (
            <article
              key={post._id}
              className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 ${
                post.isFeatured ? "featured-post" : ""
              }`}
            >
              {post.mainImage && (
                <div className={`relative ${post.isFeatured ? "md:h-full" : "h-48 sm:h-56"}`}>
                  <Image
                    src={post.mainImage}
                    alt={post.title}
                    fill
                    sizes={post.isFeatured ? "(min-width: 1024px) 50vw, 100vw" : "(max-width: 768px) 100vw, 33vw"}
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    priority={post.isFeatured}
                  />
                </div>
              )}

              <div className={`p-6 ${post.isFeatured ? "md:p-8" : ""}`}>
                {post.category && (
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full mb-2">
                    {post.category}
                  </span>
                )}
                <h2 className={`font-semibold ${post.isFeatured ? "text-2xl md:text-3xl" : "text-xl"}`}>
                  {post.title}
                </h2>
                <time className="block text-sm text-gray-500 mt-1 mb-3">
                  {formatDate(post.publishedAt)}
                </time>
                <p className={`text-gray-600 ${post.isFeatured ? "text-lg" : ""}`}>
                  {post.excerpt}
                </p>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-800 transition-colors"
                  aria-label={`Read more about ${post.title}`}
                >
                  Read more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
