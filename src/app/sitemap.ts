import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://liden.in';
  
  const routes = [
    '',
    '/highlights',
    '/portfolio',
    '/playground',
    '/about',
    '/contact',
    '/resources',
    '/project/bobs-specials',
    '/project/this-is-willo',
    '/project/the-infin',
    '/project/the-invincibles',
    '/project/provenance',
    '/project/unbreak',
    '/project/kouch-dominion',
    '/project/vx-lab',
    '/project/mimco-blue',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
