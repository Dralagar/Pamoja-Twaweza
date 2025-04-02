import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.pamojatwaweza.org',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://www.pamojatwaweza.org/about',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://www.pamojatwaweza.org/programs',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://www.pamojatwaweza.org/blog',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      url: 'https://www.pamojatwaweza.org/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
        url: 'https://www.pamojatwaweza.org/donate',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
    },
    {
        url: 'https://www.pamojatwaweza.org/volunteer',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
    },
  ]
} 