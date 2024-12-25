import {UserIcon} from '@sanity/icons'
import {createSchema} from 'sanity'
import { useEffect, useState } from 'react';

export const authorType = createSchema({
  name: 'author',
  // title: 'Author',
  types: [
    {
      name: 'author',
      type: 'document',
      icon: UserIcon,
      fields: [
        {
          name: 'name',
          type: 'string',
        },
        {
          name: 'slug',
          type: 'slug',
          options: {
            source: 'name',
          },
        },
        {
          name: 'image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'bio',
          type: 'array',
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
