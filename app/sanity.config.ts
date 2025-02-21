import { defineConfig } from 'sanity';
import { schemaTypes } from './schemas';
import { structure } from 'sanity/structure'; // Updated import
import { visionTool } from '@sanity/vision';

export default defineConfig({
  name: 'default',
  title: 'Pamoja Twaweza',
  basePath: '/studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || '',
  plugins: [structure({}), visionTool()], // Updated plugin
  schema: {
    types: schemaTypes,
  },
});