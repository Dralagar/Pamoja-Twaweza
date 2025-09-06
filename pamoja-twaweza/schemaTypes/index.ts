import { type SchemaTypeDefinition } from 'sanity';
import post from './post';
import comment from './comment';
import { authorType } from './authorType';
//import { postType, } from './postType'; // ✅ Correctly import named exports
import categoryType from './categoryType';
import blockContentType from './blockContentType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    post,
   // postType,     // Optional: Only include if it's a custom object/schema
    authorType,
    categoryType,
    blockContentType,
    comment,
  ],
};
