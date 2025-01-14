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

export const schema: { types: SchemaType[] } = {
  types: [blockContentType, categoryType, postType, authorType],
};
