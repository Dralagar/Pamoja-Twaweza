// pages/api/createComment.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "@/lib/sanity/client"; // Use your existing client

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    const { name, comment, postId } = req.body;

    // IMPORTANT: For write operations, you need to create a client with write permissions
    const writeClient = client.withConfig({
      token: process.env.SANITY_API_TOKEN, // Add write token specifically for this operation
    });

    await writeClient.create({
      _type: "comment",
      name,
      comment,
      approved: false,
      post: { _type: "reference", _ref: postId },
    });

    res.status(200).json({ message: "Comment submitted" });
  } catch (err) {
    res.status(500).json({ message: "Error submitting comment", err });
  }
}