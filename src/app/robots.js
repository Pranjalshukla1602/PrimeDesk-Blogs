import { COMPANY } from '@/lib/data';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: `${COMPANY.url}/sitemap.xml`,
  };
}
