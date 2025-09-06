// pages/api/createComment.ts
import type { NextApiRequest, NextApiResponse } from "next";
import sanityClient from "@sanity/client";

const config = {
  dataset: "production",
  projectId: "boxgqwv2", // Replace with your Sanity project ID
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: "2023-01-01",
};

const client = sanityClient(config);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    const { name, comment, postId } = req.body;

    await client.create({
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
