const authorSchema = {
  name: 'author',
  type: 'document',
  title: 'Author',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'bio',
      type: 'text',
      title: 'Biography'
    },
    {
      name: 'profileImage',
      type: 'image',
      title: 'Profile Image',
      options: {
        hotspot: true
      }
    }
  ]
};

export default authorSchema;
