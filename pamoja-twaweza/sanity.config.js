import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

// Load environment variables with fallbacks
const projectId =
  process.env.SANITY_STUDIO_API_PROJECT_ID || // Preferred in dev/studio
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || // Fallback for client-side builds
  'boxgqwv2' // Hardcoded fallback for local dev

const dataset =
  process.env.SANITY_STUDIO_API_DATASET ||
  process.env.NEXT_PUBLIC_SANITY_DATASET ||
  'production'

// Debug output for sanity check (optional in production)
console.log('Sanity Studio Config:', { projectId, dataset })

export default defineConfig({
  name: 'default',
  title: 'pamoja-twaweza',

  projectId,
  dataset,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
