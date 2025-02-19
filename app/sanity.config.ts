import { defineConfig } from 'sanity'
import { schemaTypes } from './schemas'
import { deskTool } from 'sanity/desk'

export default defineConfig({
  name: 'default',
  title: 'Pamoja Twaweza',
  basePath: '/studio',
  projectId: 'yourProjectId', // Add the missing projectId
  dataset: 'yourDataset', // Add the missing dataset
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
})