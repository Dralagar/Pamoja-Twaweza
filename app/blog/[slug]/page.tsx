import { client } from "../../../lib/sanityClient";
import Image from "next/image";

async function getPost(slug: string) {
  const query = `
    *[_type == "post" && slug.current == $slug][0]{
      title,
      mainImage {
        asset->{
          url
        },
        alt
      },
      body,
      _createdAt
    }
  `;
  return await client.fetch(query, { slug });
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) return <p>Post not found</p>;

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 text-sm mb-6">
        {new Date(post._createdAt).toLocaleDateString()}
      </p>

      {post.mainImage?.asset?.url && (
        <Image
          src={post.mainImage.asset.url}
          alt={post.mainImage.alt || post.title}
          width={800}
          height={500}
          className="w-full rounded-lg mb-6"
        />
      )}

      <div className="prose max-w-none">{post.body}</div>
    </main>
  );
}
