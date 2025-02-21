import { defineConfig } from 'sanity'
import { schemaTypes } from './schemas'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
export default defineConfig({
  name: 'default', 
  title: 'Pamoja Twaweza',
  basePath: '/studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || '',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
  // The selection is a duplicate and should be removed as it is already defined in the export default defineConfig block.
// End of Selection