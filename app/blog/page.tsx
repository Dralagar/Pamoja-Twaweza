"use client";
import { useEffect, useState } from "react";
import { client } from "@/lib/sanity/client";
import imageUrlBuilder from '@sanity/image-url';
import styles from "../styles/Blog.module.css";
import { Squares2X2Icon, ListBulletIcon } from '@heroicons/react/24/outline';

interface Blog {
  _id: string;
  authorName: string;
  authorImage: string;
  title: string;
  text: string;
  uploadDate: string;
  publishedAt: string;
}

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

const query = `*[_type == "post" && defined(publishedAt)] { _id, authorName, authorImage, title, text, uploadDate, publishedAt }`;

const BlogPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isGridView, setIsGridView] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const result = await client.fetch(query);
        setBlogs(result);
      } catch (err) {
        console.error(err);
        setError("Failed to load blogs.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <div className="p-10 text-center">Loading...</div>;
  if (error) return <div className="p-10 text-red-600 text-center">{error}</div>;
  if (!blogs.length) return <div className="p-10 text-center">No blogs found.</div>;

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog Posts</h1>
      
      {/* View Toggle Bar */}
      <div className="flex justify-end mb-4 h-[70px] bg-gray-50 rounded-md p-1">
        <button 
          onClick={() => setIsGridView(true)}
          className={`flex items-center px-3 py-1 rounded-md mr-2 text-sm font-medium transition-colors ${
            isGridView ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600 hover:bg-gray-200'
          }`}
        >
          <Squares2X2Icon className="w-4 h-4 mr-1.5" />
          <span>Grid</span>
        </button>
        <button
          onClick={() => setIsGridView(false)}
          className={`flex items-center px-3 py-1 rounded-md text-sm font-medium transition-colors ${
            !isGridView ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600 hover:bg-gray-200'
          }`}
        >
          <ListBulletIcon className="w-4 h-4 mr-1.5" />
          <span>List</span>
        </button>
      </div>

      <div className={`${isGridView ? styles["blog-grid"] : styles["blog-list"]}`}>
        {blogs.map((blog) => (
          <article key={blog._id} className="bg-white p-6 shadow rounded hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-700">{blog.text}</p>
            <p className="text-gray-500">By {blog.authorName}</p>
            <img src={urlFor(blog.authorImage).url()} alt={blog.authorName} className="w-16 h-16 rounded-full mb-2" />
            <p className="text-gray-500">Published on {new Date(blog.publishedAt).toLocaleDateString()}</p>
            <p className="text-gray-500">Uploaded on {new Date(blog.uploadDate).toLocaleDateString()}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
