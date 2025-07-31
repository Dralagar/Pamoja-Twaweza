import {type SchemaTypeDefinition} from 'sanity'
import {authorType} from './postType'  // Modified version without image
import {categoryType} from './categoryType'  // Your existing file
import {blockContentType} from './blockContentType'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [
    authorType,
    categoryType,
    blockContentType
  ]
}