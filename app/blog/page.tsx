"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Calendar, User, Tag, Clock, ArrowRight } from 'lucide-react';

// Mock blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Empowering Refugee Youth Through Digital Skills Training",
    slug: "empowering-refugee-youth",
    excerpt: "Discover how our digital skills program is transforming lives and creating opportunities for refugee youth in Kitengela.",
    publishedAt: "2024-11-15",
    readTime: "5 min read",
    mainImage: "/images/Pamoj5.jpeg",
    author: {
      name: "Eric Kimararungu",
      image: "/images/eri.jpeg",
      role: "Executive Director"
    },
    categories: ["Education", "Youth Empowerment"],
    content: `
      <p>Our digital skills training program has been a cornerstone of community empowerment since its inception. Through comprehensive training modules, we've equipped over 150 young people with essential computer skills, digital literacy, and online business tools.</p>
      
      <h3>Program Highlights</h3>
      <p>The program covers fundamental computer operations, Microsoft Office Suite, internet navigation, and social media for business. Participants also learn digital marketing fundamentals that prepare them for the modern job market.</p>
      
      <h3>Success Stories</h3>
      <p>Many of our graduates have gone on to secure employment or start their own digital businesses. The transformation we've witnessed has been truly remarkable, with participants reporting increased confidence and improved economic prospects.</p>
      
      <h3>Looking Forward</h3>
      <p>We continue to adapt our curriculum to meet evolving market demands, ensuring our participants remain competitive and relevant in the digital economy.</p>
    `
  },
  {
    id: 2,
    title: "Mental Health Awareness: Breaking the Stigma in Our Community",
    slug: "mental-health-awareness",
    excerpt: "Exploring our community-led approach to mental health support and how we're creating safe spaces for healing and growth.",
    publishedAt: "2024-11-10",
    readTime: "7 min read",
    mainImage: "/images/Pamoj6.jpeg",
    author: {
      name: "Annled Karimi",
      image: "/images/ann.jpg",
      role: "Program Manager"
    },
    categories: ["Mental Health", "Community"],
    content: `
      <p>Mental health remains a critical yet often overlooked aspect of refugee and community wellbeing. Our peer-to-peer support program has been instrumental in breaking down stigma and providing accessible mental health resources.</p>
      
      <h3>Our Approach</h3>
      <p>We train community members to offer psycho-social support, creating a network of trusted peers who understand the unique challenges faced by displaced communities.</p>
      
      <h3>Impact and Reach</h3>
      <p>Through regular support groups, counseling services, and awareness workshops, we've supported over 300 individuals in their mental health journey. The power of community-led support cannot be understated.</p>
      
      <h3>Building Resilience</h3>
      <p>Our programs focus not just on crisis intervention, but on building long-term resilience and coping strategies that empower individuals to navigate life's challenges with confidence.</p>
    `
  },
  {
    id: 3,
    title: "Community Integration Through English Literacy Programs",
    slug: "english-literacy-programs",
    excerpt: "How language education is opening doors and building bridges between refugee and host communities.",
    publishedAt: "2024-11-05",
    readTime: "6 min read",
    mainImage: "/images/education.jpg",
    author: {
      name: "Eric Kimararungu",
      image: "/images/eri.jpeg",
      role: "Executive Director"
    },
    categories: ["Education", "Integration"],
    content: `
      <p>Language is more than just words—it's a bridge to opportunity, integration, and belonging. Our English literacy program serves as a vital tool for refugee community members seeking to fully participate in their host communities.</p>
      
      <h3>Beyond Basic Language</h3>
      <p>While we teach fundamental English skills, our program goes deeper. We incorporate cultural integration, business English, and even IELTS preparation for those seeking higher education or migration opportunities.</p>
      
      <h3>Real-World Application</h3>
      <p>Classes focus on practical, everyday scenarios—from navigating government services to conducting job interviews. This approach ensures participants can immediately apply their learning.</p>
      
      <h3>Community Building</h3>
      <p>Perhaps most importantly, our classes bring together people from diverse backgrounds, fostering friendships and mutual understanding that strengthen the entire community.</p>
    `
  },
  {
    id: 4,
    title: "Entrepreneurship as a Path to Self-Reliance",
    slug: "entrepreneurship-path-to-self-reliance",
    excerpt: "Supporting refugee entrepreneurs: from business idea to sustainable enterprise.",
    publishedAt: "2024-10-28",
    readTime: "8 min read",
    mainImage: "/images/Pamoj8.jpeg",
    author: {
      name: "Ramazani Mulisho",
      image: "/images/Ramazani.jpg",
      role: "Finance Lead"
    },
    categories: ["Livelihoods", "Entrepreneurship"],
    content: `
      <p>Entrepreneurship offers a powerful pathway to self-reliance for refugee communities. Our comprehensive business training program equips aspiring entrepreneurs with the skills and knowledge needed to turn ideas into thriving businesses.</p>
      
      <h3>Comprehensive Training</h3>
      <p>From business plan development to financial management and marketing strategies, we cover every aspect of starting and running a successful business.</p>
      
      <h3>Access to Resources</h3>
      <p>Beyond training, we connect entrepreneurs with microfinance opportunities, mentorship programs, and market linkages that help turn dreams into reality.</p>
      
      <h3>Success Metrics</h3>
      <p>Over 50 businesses have been launched by program graduates, creating employment not just for founders but for dozens of community members.</p>
    `
  }
];

export default function ModernBlogPage() {
  const [expandedPost, setExpandedPost] = useState(null);

  const togglePost = (postId) => {
    setExpandedPost(expandedPost === postId ? null : postId);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white mt-16 pt-10">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 mt-16">
              Latest Blog Posts
            </h1>
            <div className="w-24 h-1 bg-[#0089C7] mx-auto mb-6" />
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Insights, updates, and stories from our community transformation journey
            </p>
          </motion.div>
        </div>
      </section>



      {/* Blog Posts Accordion */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="space-y-6">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => togglePost(post.id)}
                  className="w-full p-6 md:p-8 flex items-start gap-6 hover:bg-gray-50 transition-colors duration-200"
                >
                  {/* Featured Image Thumbnail */}
                  <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden">
                    <img
                      src={post.mainImage}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Post Info */}
                  <div className="flex-1 text-left">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.categories.map((category, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-[#0089C7]/10 text-[#0089C7] rounded-full text-xs font-semibold"
                        >
                          {category}
                        </span>
                      ))}
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-[#0089C7] transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author.name}
                      </span>
                    </div>
                  </div>

                  {/* Expand Icon */}
                  <motion.div
                    animate={{ rotate: expandedPost === post.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-8 h-8 text-[#0089C7]" />
                  </motion.div>
                </button>

                {/* Accordion Content */}
                <AnimatePresence>
                  {expandedPost === post.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-8">
                        {/* Full Featured Image */}
                        <div className="mb-8 rounded-2xl overflow-hidden">
                          <img
                            src={post.mainImage}
                            alt={post.title}
                            className="w-full h-64 md:h-96 object-cover"
                          />
                        </div>

                        {/* Content */}
                        <div 
                          className="prose prose-lg max-w-none mb-8"
                          dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        {/* Author Card */}
                        <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-100">
                          <img
                            src={post.author.image}
                            alt={post.author.name}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                          <div>
                            <p className="font-bold text-gray-900 text-lg">{post.author.name}</p>
                            <p className="text-gray-600">{post.author.role}</p>
                          </div>
                        </div>

                        {/* Share/Action Button */}
                        <div className="mt-6 flex justify-end">
                          <button className="flex items-center gap-2 px-6 py-3 bg-[#0089C7] text-white rounded-full font-semibold hover:bg-[#0077b3] transition-all duration-300 shadow-lg">
                            Read Full Story
                            <ArrowRight className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-[#0089C7] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#FFE66D] rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F26522] rounded-full filter blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <div className="w-24 h-1 bg-[#FFE66D] mx-auto mb-8" />
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Subscribe to our newsletter for the latest stories, updates, and opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/50"
              />
              <button className="px-8 py-4 bg-white text-[#0089C7] rounded-full font-semibold text-lg hover:bg-[#FFE66D] hover:text-[#000000] transition-all duration-300 shadow-xl">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}