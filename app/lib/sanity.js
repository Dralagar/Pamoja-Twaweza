import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'your-project-id',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: true
})

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}
