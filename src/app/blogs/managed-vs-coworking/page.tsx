import ManagedVsCoworkingPage from './ManagedVsCoworkingClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Managed Office vs Coworking Space in Hyderabad – Which Is Better for Startups? | PrimeDesk',
  description:
    'Confused between managed office and coworking in Hyderabad? Compare costs (₹5K–₹16K/seat), privacy, scalability, and flexibility. Expert guide for startups — zero brokerage with PrimeDesk.',
  keywords: [
    'managed office vs coworking Hyderabad',
    'coworking space Hyderabad',
    'managed office Hyderabad',
    'startup office Hyderabad',
    'office space comparison Hyderabad',
    'coworking vs managed office cost',
    'best office space for startups Hyderabad',
    'Hitech City office space',
    'Financial District coworking',
    'PrimeDesk Hyderabad',
  ],
  openGraph: {
    title: 'Managed Office vs Coworking Space in Hyderabad – Which Is Better for Startups?',
    description:
      'Compare managed offices and coworking spaces in Hyderabad. Detailed guide on costs, privacy, scalability, and when to switch. Zero brokerage with PrimeDesk.',
    type: 'article',
    url: 'https://blogs.primedesk.co.in/blogs/managed-vs-coworking/',
    siteName: 'PrimeDesk',
    images: [
      {
        url: 'https://blogs.primedesk.co.in/images/hero_managed_coworking.webp',
        width: 720,
        height: 400,
        alt: 'Managed Office vs Coworking Space in Hyderabad',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Managed Office vs Coworking in Hyderabad – Startup Guide | PrimeDesk',
    description:
      'Which is better for your startup — coworking or managed office? Compare costs, privacy & scalability in Hyderabad. Zero brokerage.',
    images: ['https://blogs.primedesk.co.in/images/hero_managed_coworking.webp'],
  },
  alternates: {
    canonical: 'https://blogs.primedesk.co.in/blogs/managed-vs-coworking/',
  },
};

export default function Page() {
  // JSON-LD Article Schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://blogs.primedesk.co.in/blogs/managed-vs-coworking/',
    },
    headline: 'Managed Office vs Coworking Space in Hyderabad – Which Is Better for Startups?',
    description:
      'Compare managed offices and coworking spaces in Hyderabad. Costs, privacy, scalability, and expert recommendations for startups.',
    image: 'https://blogs.primedesk.co.in/images/hero_managed_coworking.webp',
    author: {
      '@type': 'Person',
      name: 'Vibhuti Jain',
      jobTitle: 'Director',
      url: 'https://linkedin.com/in/vibhuti-jain-67b06b20',
    },
    publisher: {
      '@type': 'Organization',
      name: 'PrimeDesk',
      logo: {
        '@type': 'ImageObject',
        url: 'https://blogs.primedesk.co.in/images/logo.webp',
      },
    },
    datePublished: '2025-03-15',
    dateModified: '2025-03-26',
  };

  // JSON-LD LocalBusiness Schema
  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'PrimeDesk',
    image: 'https://blogs.primedesk.co.in/images/logo.webp',
    '@id': 'https://blogs.primedesk.co.in',
    url: 'https://blogs.primedesk.co.in',
    telephone: '+917993726302',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Hitech City',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      addressCountry: 'IN',
    },
  };

  // JSON-LD FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Which is cheaper: coworking or managed office?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Coworking is cheaper initially, but managed offices provide better value as teams grow.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is coworking good for startups?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, for early-stage startups with small teams.',
        },
      },
      {
        '@type': 'Question',
        name: 'When should a startup move to a managed office?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'When the team grows beyond 10–15 employees.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which is better in Hyderabad?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Depends on stage — coworking for early stage, managed office for scaling.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ManagedVsCoworkingPage />
    </>
  );
}
