"use client";
import { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import { format } from 'date-fns';
import { PortableText } from '@portabletext/react';
import { motion, AnimatePresence } from 'framer-motion';
import Comment from '../components/Comment';
import CommentList from '../components/CommentList';
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

interface Comment {
  id: string;
  name: string;
  content: string;
  createdAt: string;
  avatar?: string;
}

interface Post {
  _id: string;
  title: string;
  slug: string;
  mainImage?: any;
  publishedAt: string;
  excerpt: string;
  body: any[];
  isFeatured?: boolean;
  categories?: Category[];
  author?: Author;
  estimatedReadingTime?: number;
  comments?: Comment[];
}

interface Author {
  name: string;
  image?: any;
}

interface Category {
  title: string;
  slug: string;
}

const BlogPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const fetchPosts = async () => {
    try {
      const query = `*[_type == "post" && defined(publishedAt)] | order(publishedAt desc) {
        _id,
        title,
        slug,
        mainImage {
          asset-> {
            _ref,
            url
          }
        },
        publishedAt,
        body[] {
          _type,
          children[] {
            _type,
            text,
            marks
          }
        }
      }`;
      
      const fetchedPosts = await client.fetch(query);
      console.log('Fetched posts:', fetchedPosts); // Debug log
      return fetchedPosts || [];
    } catch (err) {
      console.error('Error fetching posts:', err);
      setError('Failed to load blog posts');
      return [];
    }
  };

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      try {
        const fetchedPosts = await fetchPosts();
        console.log('Posts loaded:', fetchedPosts);
        if (fetchedPosts && fetchedPosts.length > 0) {
          setPosts(fetchedPosts);
        } else {
          setError('No posts found');
        }
      } catch (err) {
        console.error('Error loading posts:', err);
        setError('Failed to load blog posts');
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  const formatPublishDate = (dateString: string) => {
    try {
      if (!dateString) {
        console.log('No date string provided');
        return 'Not published yet';
      }
      
      // Log the incoming date string
      console.log('Formatting date:', dateString);
      
      // Handle Sanity's ISO date format
      const date = new Date(dateString);
      
      // Log the parsed date
      console.log('Parsed date:', date);
      
      if (isNaN(date.getTime())) {
        console.log('Invalid date object');
        return 'Invalid date';
      }
      
      // Format the date
      const formattedDate = format(date, 'MMMM dd, yyyy');
      console.log('Formatted date:', formattedDate);
      
      return formattedDate;
    } catch (error) {
      console.error('Date formatting error:', error);
      return 'Invalid date';
    }
  };

  const openPostModal = (post: Post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const closePostModal = () => {
    setSelectedPost(null);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
              Impact Stories
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"
            />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-xl md:text-2xl text-gray-600 mt-4 max-w-2xl"
          >
            Voices Changing the Narrative
          </motion.p>
        </div>

        <div className="flex justify-end mb-8">
          <div className="flex space-x-4">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {loading ? (
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-48 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-600">{error}</p>
          </div>
        ) : !posts || posts.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900">No posts found</h2>
            <p className="text-gray-600 mt-2">There are currently no blog posts available.</p>
          </div>
        ) : (
          <motion.div 
            layout
            className={viewMode === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              : "space-y-8"
            }
          >
            {posts.map((post, index) => (
              <motion.article
                key={post._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-lg shadow-md overflow-hidden ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
                onClick={() => openPostModal(post)}
              >
                {post.mainImage && (
                  <div className={`relative ${viewMode === 'list' ? 'w-1/3' : 'w-full h-64'}`}>
                    <Image
                      src={urlFor(post.mainImage).url()}
                      alt={`${post.title} - Our impact stories`}
                      className="object-cover w-full h-full"
                      sizes={viewMode === 'list' ? '33vw' : '100vw'}
                      loading={index < 3 ? 'eager' : 'lazy'}
                      fill
                    />
                  </div>
                )}
                <div className={`p-6 ${viewMode === 'list' ? 'w-2/3' : ''}`}>
                  <h2 className="text-xl font-semibold mb-3 hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <div className="flex flex-wrap items-center text-gray-600 text-sm mb-4 gap-4">
                    {post.author && (
                      <div className="flex items-center">
                        {post.author.image && (
                          <Image
                            src={urlFor(post.author.image).url()}
                            alt={`${post.author.name} - Pamoja Twaweza Author`}
                            width={24}
                            height={24}
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
                  <div className="prose prose-sm max-w-none mb-4 line-clamp-3">
                    <PortableText value={post.body.slice(0, 3)} />
                  </div>
                  <div className="flex items-center text-blue-600 hover:text-blue-800 font-medium group">
                    Read full article
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        )}

        <AnimatePresence>
          {isModalOpen && selectedPost && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto"
              onClick={closePostModal}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="min-h-screen flex items-center justify-center p-4"
                onClick={e => e.stopPropagation()}
              >
                <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-6">
                      <h2 className="text-3xl font-bold">{selectedPost.title}</h2>
                      <button
                        onClick={closePostModal}
                        className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-full transition-colors"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    
                    <div className="flex flex-wrap items-center text-gray-600 mb-6 gap-4">
                      {selectedPost.author && (
                        <div className="flex items-center">
                          {selectedPost.author.image && (
                            <Image
                              src={urlFor(selectedPost.author.image).url()}
                              alt={selectedPost.author.name}
                              width={32}
                              height={32}
                              className="rounded-full mr-2"
                            />
                          )}
                          <span className="font-medium">{selectedPost.author.name}</span>
                        </div>
                      )}
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {formatPublishDate(selectedPost.publishedAt)}
                      </span>
                    </div>

                    {selectedPost.mainImage && (
                      <div className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden">
                        <Image
                          src={urlFor(selectedPost.mainImage).url()}
                          alt={selectedPost.title}
                          fill
                          className="object-cover"
                          priority
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                        />
                      </div>
                    )}

                    <div className="prose prose-lg max-w-none">
                      <PortableText value={selectedPost.body} />
                    </div>

                    {selectedPost.categories && selectedPost.categories.length > 0 && (
                      <div className="mt-8 pt-8 border-t">
                        <h3 className="text-lg font-semibold mb-4">Categories:</h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedPost.categories.map((category) => (
                            <span
                              key={category.slug}
                              className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition-colors"
                            >
                              {category.title}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mt-8 border-t pt-8">
                      <CommentList comments={selectedPost.comments || []} />
                      <Comment 
                        postId={selectedPost._id} 
                        onCommentSubmit={async (comment) => {
                          // Here you would typically send the comment to your backend
                          // For now, we'll just log it
                          console.log('New comment:', comment);
                          // You can implement the actual comment submission logic here
                        }} 
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BlogPage;
