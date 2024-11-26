"use client"
import Image from "next/image"
import Link from "next/link"

export default function Blog() {
  // Sample blog posts data - you can replace with actual data/API
  const blogPosts = [
    {
      id: 1,
      title: "Community Mental Health Initiatives",
      excerpt: "Exploring the impact of our mental health programs in local communities...",
      date: "March 15, 2024",
      image: "/blog/mental-health.jpg",
      category: "Mental Health"
    },
    {
      id: 2,
      title: "Educational Empowerment Programs",
      excerpt: "How our education initiatives are transforming lives in rural areas...",
      date: "March 10, 2024",
      image: "/blog/education.jpg",
      category: "Education"
    },
    {
      id: 3,
      title: "Sustainable Development Projects",
      excerpt: "Updates on our latest community development initiatives...",
      date: "March 5, 2024",
      image: "/blog/development.jpg",
      category: "Development"
    }
  ]

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
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 mb-2">{post.category}</div>
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <Link 
                    href={`/blog/${post.id}`} 
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Read More →
                  </Link>
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