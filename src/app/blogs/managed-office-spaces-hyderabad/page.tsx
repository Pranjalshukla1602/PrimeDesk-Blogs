import ManagedOfficeBlogPage from '../managed-office-spaces-hyderabad/ManagedOfficeBlogPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Why Managed Office Spaces Are Replacing Traditional Offices in Hyderabad | PrimeDesk',
    description:
        'Companies in Hyderabad are moving to managed office spaces because they are cheaper to set up, can be moved into more quickly, and can be made bigger or smaller as needed. Zero brokerage, options in 24 hours.',
    keywords: [
        'managed office spaces Hyderabad',
        'managed office vs traditional office Hyderabad',
        'flexible office space Hyderabad',
        'managed office Hitech City',
        'managed office Financial District Hyderabad',
        'managed office Gachibowli',
        'PrimeDesk managed offices',
        'replace traditional office Hyderabad',
        'office space for startups Hyderabad',
        'GCC office Hyderabad',
    ],
    openGraph: {
        title: 'Why Managed Office Spaces Are Replacing Traditional Offices in Hyderabad | PrimeDesk',
        description:
            'Find managed office spaces in Hyderabad that are cheaper, faster to move into, and scalable. Zero brokerage, curated options in 24–48 hours.',
        type: 'article',
        url: 'https://blogs.primedesk.co.in/blogs/managed-office-spaces-hyderabad/',
        siteName: 'PrimeDesk',
        images: [
            {
                url: 'https://primedesk.co.in/images/hero_managed_office_spaces.jpeg',
                width: 1200,
                height: 600,
                alt: 'Managed office space in Hyderabad replacing traditional offices',
            },
        ],
        locale: 'en_IN',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Why Managed Office Spaces Are Replacing Traditional Offices in Hyderabad | PrimeDesk',
        description:
            'Managed offices in Hyderabad: cheaper, faster, and more scalable than traditional offices. Zero brokerage.',
        images: ['https://primedesk.co.in/images/hero_managed_office_spaces.jpeg'],
    },
    alternates: {
        canonical: 'https://blogs.primedesk.co.in/blogs/managed-office-spaces-hyderabad/',
    },
};

export default function Page() {
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': 'https://blogs.primedesk.co.in/blogs/managed-office-spaces-hyderabad/',
        },
        headline: 'Why Managed Office Spaces Are Replacing Traditional Offices in Hyderabad',
        description:
            'Companies in Hyderabad are moving to managed office spaces because they are cheaper to set up, can be moved into more quickly, and can be made bigger or smaller as needed.',
        image: 'https://primedesk.co.in/images/hero_managed_office_spaces.jpeg',
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
        '@id': 'https://primedesk.co.in',
        url: 'https://primedesk.co.in',
        telephone: '+917993726302',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'First floor T Hub Phase 2, 20 Inorbit Mall Rd, Vittal Rao Nagar, Madhapur',
            addressLocality: 'Hyderabad',
            addressRegion: 'Telangana',
            postalCode: '500081',
            addressCountry: 'IN',
        },
        areaServed: { '@type': 'City', name: 'Hyderabad' },
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'What are the benefits of managed office spaces?',
                acceptedAnswer: { '@type': 'Answer', text: 'Lower cost, faster setup, flexibility, and scalability.' },
            },
            {
                '@type': 'Question',
                name: 'Are managed offices better than traditional offices?',
                acceptedAnswer: { '@type': 'Answer', text: 'Yes, for most growing companies due to flexibility and lower cost.' },
            },
            {
                '@type': 'Question',
                name: 'How quickly can I move into a managed office?',
                acceptedAnswer: { '@type': 'Answer', text: 'Typically within 7–15 days.' },
            },
            {
                '@type': 'Question',
                name: 'Why are companies shifting to flexible offices in Hyderabad?',
                acceptedAnswer: { '@type': 'Answer', text: 'Because they offer faster setup, lower cost, and scalability.' },
            },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <ManagedOfficeBlogPage />
        </>
    );
}