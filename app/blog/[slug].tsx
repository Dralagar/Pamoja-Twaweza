import { GetStaticPaths, GetStaticProps } from 'next';
import { sanityClient } from '../../lib/sanity';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Blog.module.css';
import { PortableText } from '@portabletext/react';

interface Post {
  _id: string;
  title: string;
  mainImage?: string;
  publishedAt: string;
  body: any; // Adjust based on your content structure
}

export default function BlogPost({ post }: { post: Post }) {
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      {post.mainImage && (
        <Image
          src={post.mainImage}
          alt={post.title}
          width={800}
          height={400}
          objectFit="cover"
        />
      )}
      <div className="mt-8">
        <PortableText value={post.body} />
      </div>
      <Link href={`/blog/${post._id}`} className={styles.readMore}>
        Read more
      </Link>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const query = `*[_type == "post"]{ "slug": slug.current }`;
  const posts = await sanityClient.fetch(query);

  const paths = posts.map((post: { slug: string }) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params!;
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    "mainImage": mainImage.asset->url,
    publishedAt,
    body
  }`;
  const post = await sanityClient.fetch(query, { slug });

  return {
    props: { post },
    revalidate: 60, // Revalidate every 60 seconds
  };
};
