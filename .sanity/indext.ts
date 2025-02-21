import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk-tool';

export default defineConfig({
  name: 'default',
  title: 'Pamoja Twaweza',
  basePath: '/studio',
  projectId: 'your-project-id', // Replace with your actual project ID
  dataset: 'production', // Replace with your dataset name
  plugins: [deskTool()],
  schema: {
    types: [], // Empty array until schemas are defined
  },
});