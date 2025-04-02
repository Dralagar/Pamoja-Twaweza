import { GetStaticPaths, GetStaticProps } from 'next';
import { client } from '../lib/sanity';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Blog.module.css';
import { PortableText } from '@portabletext/react';
import { format } from 'date-fns';
import { urlFor } from '../../lib/sanity.client';
import { motion } from 'framer-motion';

interface Post {
  _id: string;
  title: string;
  mainImage?: any;
  publishedAt: string;
  body: any;
  author?: {
    name: string;
    image?: any;
  };
  categories?: Array<{
    title: string;
    slug: string;
  }>;
}

export default function BlogPost({ post }: { post: Post }) {
  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-2xl font-bold text-red-600">Post not found</h1>
          <p className="mt-2 text-gray-600">The requested blog post could not be loaded.</p>
          <Link href="/blog" className="mt-4 inline-block text-blue-600 hover:text-blue-800">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const formatPublishDate = (dateString: string) => {
    try {
      if (!dateString) return 'Not published yet';
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return 'Invalid date';
      return format(date, 'MMMM dd, yyyy');
    } catch (error) {
      console.error('Date formatting error:', error);
      return 'Invalid date';
    }
  };

  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 group"
          >
            <svg className="w-5 h-5 mr-1 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
          
          <div className="flex flex-wrap items-center text-gray-600 mb-6 gap-4">
            {post.author && (
              <div className="flex items-center">
                {post.author.image && (
                  <Image
                    src={urlFor(post.author.image).url()}
                    alt={post.author.name}
                    width={40}
                    height={40}
                    className="rounded-full mr-2"
                  />
                )}
                <span className="font-medium">{post.author.name}</span>
              </div>
            )}
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {formatPublishDate(post.publishedAt)}
            </span>
          </div>

          {post.mainImage && (
            <div className="relative w-full aspect-video md:aspect-[16/9] rounded-xl overflow-hidden shadow-xl">
              <Image
                src={urlFor(post.mainImage).url()}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />
            </div>
          )}
        </header>

        <div className="prose prose-lg max-w-none bg-white rounded-xl shadow-md p-6 md:p-8">
          <PortableText value={post.body} />
        </div>

        {post.categories && post.categories.length > 0 && (
          <div className="mt-8 pt-8 border-t">
            <h2 className="text-lg font-semibold mb-4">Categories:</h2>
            <div className="flex flex-wrap gap-2">
              {post.categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/blog/category/${category.slug}`}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition-colors"
                >
                  {category.title}
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8 pt-8 border-t">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 group"
          >
            <svg className="w-5 h-5 mr-1 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const query = `*[_type == "post" && defined(slug.current)]{
      "slug": slug.current
    }`;
    const posts = await client.fetch(query);

    const paths = posts.map((post: { slug: string }) => ({
      params: { slug: post.slug },
    }));

    return { paths, fallback: 'blocking' };
  } catch (error) {
    console.error('Error in getStaticPaths:', error);
    return { paths: [], fallback: 'blocking' };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const { slug } = params!;
    
    if (!slug || typeof slug !== 'string') {
      return {
        notFound: true,
        revalidate: 60,
      };
    }

    const query = `*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      mainImage,
      publishedAt,
      body,
      "author": author->{
        name,
        image
      },
      "categories": categories[]->{
        title,
        "slug": slug.current
      }
    }`;
    
    const post = await client.fetch(query, { slug });

    if (!post) {
      return {
        notFound: true,
        revalidate: 60,
      };
    }

    return {
      props: { post },
      revalidate: 60,
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return {
      notFound: true,
      revalidate: 60,
    };
  }
};
