"use client";

import { useEffect, useState } from "react";
import { client } from "@/lib/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import styles from "../styles/Blog.module.css";
// @ts-expect-error - no types for heroicons, but it's safe to use JS
import { Squares2X2Icon, ListBulletIcon, ClockIcon } from "@heroicons/react/24/outline";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { format } from "date-fns";

const formatDate = (isoString: string): string => {
  return format(new Date(isoString), "MMM d, yyyy");
};

interface BlogPost {
  _id: string;
  authorName: string;
  authorImage?: SanityImageSource;
  title: string;
  text: string;
  publishedAt: string;
  mainImage?: SanityImageSource;
  slug?: {
    current: string;
  };
  readTime?: number;
}

// Safe image builder
const builder = imageUrlBuilder(client);
function urlFor(source: SanityImageSource | null | undefined) {
  return source ? builder.image(source) : null;
}

const query = `*[_type == "post" && defined(publishedAt)] | order(publishedAt desc) {
  _id,
  authorName,
  authorImage,
  title,
  text,
  publishedAt,
  mainImage,
  slug,
  "readTime": round(length(pt::text(text)) / 5 / 180)
}`;

const PageLoader = () => (
  <div className="flex justify-center items-center h-64">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    <span className="ml-4 text-gray-600">Loading content...</span>
  </div>
);

const ErrorDisplay = ({ message }: { message: string }) => (
  <div className="p-10 text-center bg-red-50 rounded-xl">
    <div className="text-red-600 font-medium mb-2">Error Loading Content</div>
    <p className="text-gray-700">{message}</p>
    <button
      onClick={() => window.location.reload()}
      className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
    >
      Try Again
    </button>
  </div>
);

const EmptyState = () => (
  <div className="p-10 text-center bg-gray-50 rounded-xl">
    <div className="text-gray-500 text-lg">No blog posts available</div>
    <p className="text-gray-400 mt-2">Check back later for new content</p>
  </div>
);

const ViewToggle = ({
  viewMode,
  setViewMode,
}: {
  viewMode: "grid" | "list";
  setViewMode: (mode: "grid" | "list") => void;
}) => (
  <div className="flex justify-center mb-12">
    <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1 shadow-sm">
      <button
        onClick={() => setViewMode("grid")}
        className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
          viewMode === "grid"
            ? "bg-blue-600 text-white shadow"
            : "text-gray-700 hover:bg-gray-50"
        }`}
      >
        <Squares2X2Icon className="w-5 h-5 mr-2" />
        Grid
      </button>
      <button
        onClick={() => setViewMode("list")}
        className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
          viewMode === "list"
            ? "bg-blue-600 text-white shadow"
            : "text-gray-700 hover:bg-gray-50"
        }`}
      >
        <ListBulletIcon className="w-5 h-5 mr-2" />
        List
      </button>
    </div>
  </div>
);

const FeaturedPost = ({ post }: { post: BlogPost }) => (
  <article className="mb-16 bg-white rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300">
    {post.mainImage ? (
      <div className="relative h-96 w-full overflow-hidden">
        <img
          src={urlFor(post.mainImage)?.url() || ''}
          alt={post.title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
      </div>
    ) : (
      <div className="relative h-96 w-full bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white text-center px-4">{post.title}</h1>
      </div>
    )}

    <div className="p-8">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
        {post.title}
      </h1>

      <div className="flex items-center gap-4 mb-8">
        {post.authorImage && (
          <img
            src={urlFor(post.authorImage)?.width(200).height(200).url() || ''}
            alt={post.authorName}
            className="w-14 h-14 rounded-full object-cover border-4 border-white shadow-lg"
          />
        )}
        <div>
          <p className="font-bold text-gray-900">{post.authorName}</p>
          <div className="flex items-center gap-3 text-gray-600">
            <time dateTime={post.publishedAt} className="text-sm">
              {formatDate(post.publishedAt)}
            </time>
            {post.readTime && (
              <span className="flex items-center text-sm">
                <ClockIcon className="w-4 h-4 mr-1" />
                {post.readTime} min read
              </span>
            )}
          </div>
        </div>
      </div>

      <div
        className="prose prose-xl max-w-none text-gray-700"
        dangerouslySetInnerHTML={{ __html: post.text }}
      />
    </div>
  </article>
);

const BlogCard = ({
  post,
  viewMode,
}: {
  post: BlogPost;
  viewMode: "grid" | "list";
}) => (
  <article
    className={`
    bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300
    ${viewMode === "list" ? "flex" : ""}
    ${styles["blog-card"]}
  `}
  >
    {post.mainImage ? (
      <div
        className={`
        ${viewMode === "list" ? "w-2/5" : "w-full"} 
        ${styles["card-image-container"]}
      `}
      >
        <img
          src={urlFor(post.mainImage)?.url() || ''}
          alt={post.title}
          className={`
            w-full h-full object-cover transition-transform duration-500 hover:scale-105
            ${viewMode === "list" ? "aspect-square" : "aspect-video"}
          `}
          loading="lazy"
        />
      </div>
    ) : (
      <div
        className={`
        ${viewMode === "list" ? "w-2/5" : "w-full"}
        bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center
        ${viewMode === "list" ? "aspect-square" : "aspect-video"}
      `}
      >
        <h2 className="text-xl font-bold text-white text-center px-4">{post.title}</h2>
      </div>
    )}

    <div
      className={`
      p-6 flex flex-col
      ${viewMode === "list" ? "w-3/5" : ""}
      ${styles["card-content"]}
    `}
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
        {post.title}
      </h2>

      <div
        className="prose prose-base text-gray-600 mb-4 line-clamp-3"
        dangerouslySetInnerHTML={{ __html: post.text }}
      />

      <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {post.authorImage && (
            <img
              src={urlFor(post.authorImage)?.url() || ''}
              alt={post.authorName}
              className="w-10 h-10 rounded-full object-cover border-2 border-white shadow"
            />
          )}
          <span className="font-semibold text-gray-900">{post.authorName}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          {post.readTime && (
            <span className="flex items-center">
              <ClockIcon className="w-4 h-4 mr-1" />
              {post.readTime} min
            </span>
          )}
        </div>
      </div>
    </div>
  </article>
);

const BlogPage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const result = await client.fetch<BlogPost[]>(query);
        setPosts(result);
      } catch (err) {
        console.error("Failed to fetch blog posts:", err);
        setError("Failed to load blog posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <PageLoader />;
  if (error) return <ErrorDisplay message={error} />;
  if (!posts.length) return <EmptyState />;

  const [featuredPost, ...otherPosts] = posts;

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900">
        Insights & Stories
      </h1>

      <ViewToggle viewMode={viewMode} setViewMode={setViewMode} />

      <FeaturedPost post={featuredPost} />

      <div
        className={`${
          viewMode === "grid" ? styles["blog-grid"] : styles["blog-list"]
        }`}
      >
        {otherPosts.map((post) => (
          <BlogCard key={post._id} post={post} viewMode={viewMode} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
