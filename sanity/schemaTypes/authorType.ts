import {UserIcon} from '@sanity/icons'
import {createSchema} from 'sanity'
import { useEffect, useState } from 'react';

export const authorType = createSchema({
  name: 'author',
  title: 'Author',
  types: [
    {
      name: 'author',
      type: 'document',
      icon: UserIcon,
      fields: [
        {
          name: 'name',
          type: 'string',
          title: 'Name',
        },
        {
          name: 'slug',
          type: 'slug',
          title: 'Slug',
          options: {
            source: 'name',
          },
        },
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'bio',
          type: 'array',
          title: 'Biography',
          of: [
            {
              type: 'block',
              styles: [{title: 'Normal', value: 'normal'}],
              lists: [],
            },
          ],
        },
      ],
      preview: {
        select: {
          title: 'name',
          media: 'image',
        },
      },
    }
  ],
})
