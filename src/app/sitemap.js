import { COMPANY } from '@/lib/data';

export default function sitemap() {
  const baseUrl = COMPANY.url;

  const routes = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/about-us/', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/our-services/', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/locations/', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/gallery/', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/contact-us/', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/private-shared-workspaces/', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/plug-play-offices/', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/managed-office-space/', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/best-customized-office-space/', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/multi-city-offices/', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/co-working-spaces/', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/zero-brokerage/', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/cost-effective-office/', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/guided-visits-one-to-one-consultation/', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/hassle-free-experience/', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/conventional-office-space/', priority: 0.7, changeFrequency: 'monthly' },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
