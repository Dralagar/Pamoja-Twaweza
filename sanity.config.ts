import { defineConfig } from '@sanity/core';
import { deskTool } from '@sanity/desk';

export default defineConfig({
  name: 'default',
  title: 'Pamoja Twaweza',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  plugins: [deskTool()],
  basePath: '/studio'
}); 