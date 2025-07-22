// ./schemas/post.ts
export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'authorName',
      title: 'Author Name',
      type: 'string',
    },
    {
      name: 'authorImage',
      title: 'Author Image',
      type: 'image',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'text',
      title: 'Text',
      type: 'text',
    },
    {
      name: 'uploadDate',
      title: 'Upload Date',
      type: 'datetime',
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    },
  ],
};
