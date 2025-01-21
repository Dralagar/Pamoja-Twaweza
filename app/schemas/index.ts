import author from './author';
import blockContent from './blockContent';

const postSchema = {
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'mainImage',
      type: 'image',
      title: 'Main Image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'author',
      type: 'reference',
      title: 'Author',
      to: [{ type: 'author' }]
    },
    {
      name: 'publishedDate',
      type: 'datetime',
      title: 'Published Date'
    },
    {
      name: 'body',
      type: 'blockContent',
      title: 'Body'
    }
  ]
};

export const schemaTypes = [
  postSchema,
  author,
  blockContent
];
