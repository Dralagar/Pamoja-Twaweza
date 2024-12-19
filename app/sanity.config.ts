import { defineConfig } from 'sanity'
import { schemaTypes } from './schemas/index'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'

export default defineConfig({
  name: 'default',
  title: 'Pamoja Twaweza',
  projectId: 'your-project-id',
  dataset: 'production',
  basePath: '/studio',
  plugins: [visionTool()],
  schema: {
    types: schemaTypes,
  },
})