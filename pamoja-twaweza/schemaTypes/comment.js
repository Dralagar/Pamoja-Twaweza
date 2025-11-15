// ./schemas/comment.js
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required().min(2).max(50)
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule => Rule.required().email()
    }),
    defineField({
      name: 'comment',
      title: 'Comment',
      type: 'text',
      validation: Rule => Rule.required().min(10).max(1000)
    }),
    defineField({
      name: 'approved',
      title: 'Approved',
      type: 'boolean',
      initialValue: false,
      description: 'Only approved comments will show on the site',
    }),
    defineField({
      name: 'post',
      title: 'Post',
      type: 'reference',
      to: [{ type: 'post' }],
      validation: Rule => Rule.required(),
      options: {
        disableNew: true
      }
    }),
    defineField({
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      readOnly: true
    })
  ],
  preview: {
    select: {
      name: 'name',
      postTitle: 'post.title',
      approved: 'approved'
    },
    prepare(selection) {
      const { name, postTitle, approved } = selection
      return {
        title: `${name} on ${postTitle}`,
        subtitle: approved ? 'Approved' : 'Pending approval'
      }
    }
  }
})