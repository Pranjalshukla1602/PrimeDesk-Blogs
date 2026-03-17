import { COMPANY } from '@/lib/data';

export const revalidate = 86400; // regenerate at most once per day

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
