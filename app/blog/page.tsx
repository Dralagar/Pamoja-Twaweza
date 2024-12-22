import Image from "next/image"
import Link from "next/link"
import { createClient } from 'next-sanity'
import { SanityDocument } from '@sanity/client'
import React from "react"

// Sanity Query
const POSTS_QUERY = `*[_type == "post" && defined(slug.current)]|order(publishedAt desc){
  _id,
  title,
  slug,
  publishedAt,
  mainImage,
  excerpt,
  categories[]->{ title }
}`

// Add this interface
interface Post extends SanityDocument {
  title: string
  slug: { current: string }
  publishedAt: string
  mainImage: { url: string }
  excerpt?: string
  categories?: { title: string }[]
}

// Initialize the Sanity client
const client = createClient({
  projectId: 'boxgqwv2', // replace with your actual project ID
  dataset: 'production',     // replace with your actual dataset
  useCdn: true,               // `false` if you want to ensure fresh data
})

export default async function Blog() {
  const posts = await client.fetch<Post[]>(POSTS_QUERY)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">Our Blog</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Stay updated with our latest news, community stories, and impact reports
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: Post) => (
            <article key={post._id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48 w-full">
                {post.mainImage && (
                  <Image
                    src={post.mainImage.url}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                )}
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 mb-2">
                  {post.categories?.map((cat: { title: string }) => cat.title).join(", ")}
                </div>
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </span>
              
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="mb-8">Get the latest updates and stories delivered to your inbox</p>
            <form className="flex flex-col md:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg text-gray-900 w-full md:w-auto"
              />
              <button
                type="submit"
                className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
} 