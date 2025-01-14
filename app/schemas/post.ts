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
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96
      }
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
    },
    {
      name: 'excerpt',
      type: 'text',
      title: 'Excerpt',
      description: 'A short summary of the post'
    },
    {
      name: 'categories',
      type: 'array',
      title: 'Categories',
      of: [{ type: 'reference', to: { type: 'category' } }]
    }
  ]
};

export default postSchema;
