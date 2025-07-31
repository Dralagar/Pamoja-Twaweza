import {UserIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const authorType = defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'name' },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'bio',
      type: 'text',
      rows: 3,
      description: 'Short author bio (optional)'
    })
  ],
  preview: {
    select: {
      title: 'name',
    }
  }
})