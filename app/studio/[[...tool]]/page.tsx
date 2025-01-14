/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

'use client'
import React, { useEffect, useState } from 'react'
import { NextStudio } from 'next-sanity/studio'
import config from '../../../app/sanity.config'
import { createClient } from '@sanity/client'

export const dynamic = 'force-static'

export default function StudioPage() {
  const [posts, setPosts] = useState<any[]>([])

  useEffect(() => {
    if (!config) {
      console.error("Sanity config is missing or not properly configured.")
      return;
    }

    const client = createClient({
      projectId: 'boxgqwv2',
      dataset: 'production',
      apiVersion: '2023-10-01',
      useCdn: true,
    });

    client.fetch('*[_type == "post"]').then((fetchedPosts: any[]) => {
      console.log("Fetched posts:", fetchedPosts)
      setPosts(fetchedPosts)
      if (!fetchedPosts || fetchedPosts.length === 0) {
        console.warn("No posts found or unable to fetch posts.")
      }
    }).catch((error: unknown) => {
      console.error("Error fetching posts:", error)
    })
  }, []); // Empty dependency array ensures this runs only on the client

  if (!config) {
    return <div>Error: Sanity configuration is missing.</div>
  }

  return (
    <div>
      <NextStudio config={config} />
      <div>
        {posts.length > 0 ? (
          posts.map((post, index) => <p key={index}>{post.title}</p>)
        ) : (
          <p>Loading posts...</p>
        )}
      </div>
    </div>
  )
}
