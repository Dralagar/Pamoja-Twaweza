// lib/env.ts
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-07-01';

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
);

export const useCdn = process.env.NEXT_PUBLIC_SANITY_CDN === 'true';

// Optional token for write operations
export const token = process.env.NEXT_PUBLIC_SANITY_TOKEN || '';

// CDN configuration
export const apiHost = process.env.NEXT_PUBLIC_SANITY_API_HOST || 'cdn.sanity.io';
export const imageCdnUrl = process.env.NEXT_PUBLIC_SANITY_IMAGE_CDN_URL || 
  `https://${apiHost}/images/${projectId}/${dataset}`;
export const imageCdnHost = process.env.NEXT_PUBLIC_SANITY_IMAGE_CDN_HOST || apiHost;

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(`
      ${errorMessage}
      Current NODE_ENV: ${process.env.NODE_ENV}
      Please verify your .env.local file contains:
      NEXT_PUBLIC_SANITY_PROJECT_ID=boxgqwv2
      NEXT_PUBLIC_SANITY_DATASET=production
      And restart your development server
    `);
  }
  return v;
}