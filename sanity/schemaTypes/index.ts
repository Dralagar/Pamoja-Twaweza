// Define a custom type if CorrectTypeName is not available
type CustomTypeName = {
  // Define the structure of your type here
};

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'

export const schema: { types: CustomTypeName[] } = {
  types: [blockContentType, categoryType, postType, authorType],
}
