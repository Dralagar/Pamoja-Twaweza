/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

'use client'
import React, { useEffect } from 'react'
import { NextStudio } from 'next-sanity/studio'
import config from '../../../app/sanity.config'
import { createClient } from '@sanity/client'

export const dynamic = 'force-static'

export default function StudioPage() {
  // Ensure the config is correctly passed to NextStudio
  if (!config) {
    console.error("Sanity config is missing or not properly configured.");
    return <div>Error: Sanity configuration is missing.</div>;
  }
  useEffect(() => {
    const client = createClient({
      projectId: 'boxgqwv2', 
      dataset: 'production',
      useCdn: true,
      apiVersion: '2023-10-01', // Specify the API version
    });
    // Fetch data and log it
    client.fetch('*[_type == "post"]').then((posts: any[]) => {
      console.log("Fetched posts:", posts);
      // Check if posts are being fetched correctly
      if (!posts || posts.length === 0) {
        console.warn("No posts found or unable to fetch posts.");
      }
    }).catch((error: unknown) => {
      console.error("Error fetching posts:", error);
    });
  }, []); // Empty dependency array ensures this runs only on the client

  return <NextStudio config={config} />;
}
