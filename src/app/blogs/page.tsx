import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogsClient from './BlogsClient';

export const metadata: Metadata = {
  title: 'Explore Our Blog | PrimeDesk',
  description:
    'Fresh insights, expert tips, and guides on workspaces, GCC strategy, and office solutions from the PrimeDesk team.',
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
];

export default function BlogsPage() {
  return (
    <>
      <Header />
      <BlogsClient blogs={BLOGS} />
      <Footer />
    </>
  );
}

