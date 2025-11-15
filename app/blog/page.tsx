// app/blog/page.tsx
import { client, urlFor } from '../../lib/sanity/client';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

// Custom components for PortableText to handle images
const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="my-6 flex justify-center">
          <Image
            src={urlFor(value).width(800).height(500).url()}
            alt={value.alt || 'Blog image'}
            width={800}
            height={500}
            className="rounded-lg shadow-md"
          />
          {value.caption && (
            <p className="text-center text-sm text-gray-600 mt-2">{value.caption}</p>
          )}
        </div>
      );
    },
  },
};

export default async function BlogPage() {
  const posts = await client.fetch(`*[_type == "post"] | order(publishedAt desc){
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    body,
    mainImage,
    author->{
      name,
      image
    },
    categories[]->{
      title
    }
  }`);

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-900">Latest Blog Posts</h1>
      
      {posts.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">No blog posts available yet.</p>
      ) : (
        <div className="space-y-12">
          {posts.map((post: any) => (
            <article key={post._id} className="bg-white rounded-xl shadow-lg p-8">
              
              {/* Main Featured Image */}
              {post.mainImage && (
                <div className="mb-6">
                  <Image
                    src={urlFor(post.mainImage).width(1200).height(600).url()}
                    alt={post.title}
                    width={1200}
                    height={600}
                    className="w-full h-64 md:h-80 object-cover rounded-lg"
                  />
                </div>
              )}
              
              {/* Title */}
              <h2 className="text-3xl font-bold mb-4 text-gray-900">{post.title}</h2>
              
              {/* Metadata */}
              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600">
                {post.publishedAt && (
                  <span>Published: {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                )}
                
                {post.author && (
                  <span>By: {post.author.name}</span>
                )}
                
                {post.categories && post.categories.length > 0 && (
                  <div className="flex gap-2">
                    {post.categories.map((category: any, index: number) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">
                        {category.title}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Excerpt */}
              {post.excerpt && (
                <p className="text-lg text-gray-700 italic mb-6 border-l-4 border-blue-500 pl-4">
                  {post.excerpt}
                </p>
              )}
              
              {/* Main Content Body */}
              {post.body ? (
                <div className="prose prose-lg max-w-none">
                  <PortableText 
                    value={post.body} 
                    components={portableTextComponents}
                  />
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">Content coming soon...</p>
              )}
              
              {/* Author Info */}
              {post.author && post.author.image && (
                <div className="flex items-center mt-8 pt-6 border-t border-gray-200">
                  <Image
                    src={urlFor(post.author.image).width(100).height(100).url()}
                    alt={post.author.name}
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{post.author.name}</p>
                    <p className="text-sm text-gray-600">Author</p>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      )}
    </div>
  );
}