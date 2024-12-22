import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'boxgqwv2',
  dataset: 'production',
  apiVersion: '2024-12-18.acacia',
  useCdn: true
})

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}
