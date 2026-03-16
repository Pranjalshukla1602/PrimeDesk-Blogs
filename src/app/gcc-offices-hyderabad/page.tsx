import GCCBlogPage from './GCCBlogPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GCC Offices in Hyderabad - Global Capability Centres | PrimeDesk',
  description:
    'Discover why Hyderabad is the rising hub for Global Capability Centres (GCCs) in India. PrimeDesk helps multinational companies find enterprise-grade managed office spaces in Hitech City, Financial District & Gachibowli with zero brokerage.',
  keywords: [
    'GCC offices Hyderabad',
    'Global Capability Centre Hyderabad',
    'managed offices for GCC',
    'enterprise office space Hyderabad',
    'Hitech City offices',
    'Financial District Hyderabad',
    'Gachibowli office space',
    'PrimeDesk GCC',
  ],
  openGraph: {
    title: 'GCC Offices in Hyderabad - Global Capability Centres | PrimeDesk',
    description:
      'Hyderabad is the rising hub for Global Capability Centres in India. Find enterprise-grade managed office spaces with zero brokerage through PrimeDesk.',
    type: 'article',
    url: 'https://prime-desk-livid.vercel.app/gcc-offices-hyderabad/',
    siteName: 'PrimeDesk',
    images: [
      {
        url: 'https://prime-desk-livid.vercel.app/images/hero_nanobanana.jpg',
        width: 1200,
        height: 600,
        alt: 'GCC Offices in Hyderabad Hitech City',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GCC Offices in Hyderabad - Global Capability Centres | PrimeDesk',
    description: 'Find enterprise-grade managed office spaces with zero brokerage through PrimeDesk in Hyderabad.',
    images: ['https://prime-desk-livid.vercel.app/images/hero_nanobanana.jpg'],
  },
  alternates: {
    canonical: 'https://prime-desk-livid.vercel.app/gcc-offices-hyderabad/',
  },
};

export default function Page() {
  // JSON-LD Structured Data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://prime-desk-livid.vercel.app/gcc-offices-hyderabad/',
    },
    headline: 'Hyderabad: The Rising Hub for Global Capability Centres in India',
    description: 'Enterprise-grade managed offices in Hitech City, Financial District & Gachibowli. Move-in ready spaces for teams of 100–2000. Zero brokerage, delivered in 24 hours.',
    image: 'https://prime-desk-livid.vercel.app/images/hero_nanobanana.jpg',
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
        url: 'https://primedesk.co.in/images/logo.png',
      },
    },
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  };

  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'PrimeDesk',
    image: 'https://primedesk.co.in/images/logo.png',
    '@id': 'https://prime-desk-livid.vercel.app',
    url: 'https://prime-desk-livid.vercel.app',
    telephone: '+917993726302',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Hitech City',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      addressCountry: 'IN',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <GCCBlogPage />
    </>
  );
}
