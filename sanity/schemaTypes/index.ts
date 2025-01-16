import { blockContentType } from '../schemaTypes/blockContentType';
import { categoryType } from '../schemaTypes/categoryType';
import { postType } from '../schemaTypes/postType';
import { authorType } from '../schemaTypes/authorType';

type SchemaType = {
  name: string;
  title: string;
  type: string;
  fields?: any[];
};

export const schema = {
  types: [blockContentType, categoryType, postType, authorType].map(type => ({
    ...type,
    title: type.title || type.name // Ensure title exists, fallback to name if not provided
  }))
};
