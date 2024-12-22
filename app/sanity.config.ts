import { defineConfig } from 'sanity'
import { schemaTypes } from './schemas/index'
import { deskTool } from 'sanity/desk'

export default defineConfig({
  name: 'default',
  title: 'Pamoja Twaweza',
  projectId: 'boxgqwv2',
  dataset: 'production',
  basePath: '/studio',
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
})