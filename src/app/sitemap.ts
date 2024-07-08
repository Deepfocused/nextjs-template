// https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemapimport { MetadataRoute } from 'next'

import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://notyet.vercel.app/',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
    ];
}
