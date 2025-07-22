import {type SchemaTypeDefinition} from 'sanity'
import {authorType} from './authorType'
import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {blogType} from './blogType'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [authorType, blockContentType, categoryType, postType, blogType],
}
