import ChecklistClient from './ChecklistClient';

export const metadata = {
  title: '7 Things to Check Before Renting Managed Office Space in Hyderabad | PrimeDesk',
  description: 'Before renting a managed office in Hyderabad, check location, internet infrastructure, meeting rooms, lease flexibility, security, scalability, and total cost. Full checklist inside.',
  keywords: 'managed office space Hyderabad, rent managed office Hyderabad, office space checklist Hyderabad, Hitech City office space, managed office vs traditional office',
  openGraph: {
    title: '7 Things to Check Before Renting Managed Office Space in Hyderabad',
    description: 'A complete checklist for businesses renting managed office space in Hyderabad.',
    url: 'https://prime-desk-livid.vercel.app/blogs/things-to-check-before-renting-managed-office-space-hyderabad/',
    type: 'article',
    images: [{ url: '/images/hero_managed_office_checklist.jpg', width: 1200, height: 630, alt: 'Managed Office Space Checklist Hyderabad' }],
  },
  alternates: { canonical: 'https://prime-desk-livid.vercel.app/blogs/things-to-check-before-renting-managed-office-space-hyderabad/' },
};

export default function Page() {
  return <ChecklistClient />;
}
