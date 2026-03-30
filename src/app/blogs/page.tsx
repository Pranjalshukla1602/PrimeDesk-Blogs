import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogsClient from './BlogsClient';

export const metadata: Metadata = {
  title: 'Explore Our Blog | PrimeDesk',
  description:
    'Fresh insights, expert tips, and guides on workspaces, GCC strategy, and office solutions from the PrimeDesk team.',
  openGraph: {
    title: 'Explore Our Blog | PrimeDesk',
    description: 'Fresh insights, expert tips, and guides on workspaces, GCC strategy, and office solutions from the PrimeDesk team.',
    url: 'https://primedesk.co.in/blogs/',
    siteName: 'PrimeDesk',
    images: [{ url: 'https://primedesk.co.in/images/hero_managed_coworking.webp', width: 1200, height: 630 }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Explore Our Blog | PrimeDesk',
    description: 'Fresh insights, expert tips, and guides on workspaces, GCC strategy, and office solutions from the PrimeDesk team.',
    images: ['https://primedesk.co.in/images/hero_managed_coworking.webp'],
  },
  alternates: {
    canonical: 'https://primedesk.co.in/blogs/',
  },
};

const BLOGS = [
  {
    id: 1,
    title: 'Hyderabad: The Rising Hub for Global Capability Centres in India',
    description:
      'Why leading enterprises are choosing Hyderabad for their GCCs, and how to plan your first 100–500 seats.',
    date: 'Nov 10, 2025',
    readTime: '6 min read',
    author: 'Vibhuti Jain',
    tag: 'GCC',
    href: '/blogs/gcc-offices-hyderabad',
    image: '/images/hero_nanobanana.jpg',
  },
  {
    id: 2,
    title: 'Managed Office vs Coworking Space in Hyderabad',
    description:
      'A startup-focused comparison of costs, flexibility, privacy, and scalability to help choose the right office model.',
    date: 'Mar 23, 2026',
    readTime: '7 min read',
    author: 'PrimeDesk Team',
    tag: 'Workspace Strategy',
    href: '/blogs/managed-vs-coworking',
    image: '/images/office1.png',
  },
  {
    id: 3,
    title: '7 Things to Check Before Renting Managed Office Space in Hyderabad',
    description:
      'Location, connectivity, meeting rooms, lease flexibility, security, scalability, and total cost—what to verify before you sign.',
    date: 'Mar 30, 2026',
    readTime: '8 min read',
    author: 'PrimeDesk Team',
    tag: 'Hyderabad',
    href: '/blogs/things-to-check-before-renting-managed-office-space-hyderabad',
    image: '/images/hero_managed_office_checklist.webp',
  },
];

export default function BlogsPage() {
  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "PrimeDesk Blog",
            "description": "Insights, expert tips, and guides on workspaces, GCC strategy, and office solutions from the PrimeDesk team.",
            "url": "https://primedesk.co.in/blogs/",
            "publisher": {
              "@type": "Organization",
              "name": "PrimeDesk",
              "logo": {
                "@type": "ImageObject",
                "url": "https://primedesk.co.in/images/logo.png"
              }
            }
          })
        }}
      />
      <BlogsClient blogs={BLOGS} />
      <Footer />
    </>
  );
}

