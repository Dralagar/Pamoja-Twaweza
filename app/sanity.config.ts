import { defineConfig } from 'sanity'
import { visionTool } from '@sanity/vision '
import { schemaTypes } from './schemas/index'

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