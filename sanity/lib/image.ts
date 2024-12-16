import createImageUrlBuilder from '@sanity/image-url'
import { client } from './client'

export const imageBuilder = createImageUrlBuilder(client)
