import ScalableOfficeBlogPage from '../scalable-office-spaces-hyderabad/ScalableOfficeBlogPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Scalable Office Spaces for Growing Companies: From 20 to 200 Seats | PrimeDesk',
    description:
        'Stop moving offices every time your team grows. Find scalable managed office spaces in Hyderabad — Hitech City, Financial District & Gachibowli — that expand from 20 to 200+ seats. Zero brokerage, options in 24 hours.',
    keywords: [
        'scalable office spaces Hyderabad',
        'managed office space Hyderabad',
        'office space for growing companies Hyderabad',
        'flexible office space Hyderabad',
        'office expansion Hyderabad',
        'Hitech City office space',
        'Financial District office space Hyderabad',
        'Gachibowli office space',
        'PrimeDesk scalable offices',
        '20 to 200 seat office Hyderabad',
    ],
    openGraph: {
        title: 'Scalable Office Spaces for Growing Companies: From 20 to 200 Seats | PrimeDesk',
        description:
            'Find managed offices in Hyderabad that scale from 20 to 200+ seats without disruption. Zero brokerage, curated options in 24–48 hours.',
        type: 'article',
        url: 'https://primedesk.co.in/scalable-office-spaces-hyderabad/',
        siteName: 'PrimeDesk',
        images: [
            {
                url: 'https://primedesk.co.in/images/hero_nanobanana.jpg',
                width: 1200,
                height: 600,
                alt: 'Scalable managed office space in Hyderabad for growing companies',
            },
        ],
        locale: 'en_IN',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Scalable Office Spaces for Growing Companies: From 20 to 200 Seats | PrimeDesk',
        description:
            'Find managed offices in Hyderabad that scale from 20 to 200+ seats. Zero brokerage, options in 24 hours.',
        images: ['https://primedesk.co.in/images/hero_nanobanana.jpg'],
    },
    alternates: {
        canonical: 'https://primedesk.co.in/scalable-office-spaces-hyderabad/',
    },
};

export default function Page() {
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': 'https://primedesk.co.in/scalable-office-spaces-hyderabad/',
        },
        headline: 'Scalable Office Spaces for Growing Companies: From 20 Seats to 200 Seats',
        description:
            'How businesses can grow their office space from 20 to 200 seats by choosing managed offices and flexible workspaces in Hyderabad.',
        image: 'https://primedesk.co.in/images/hero_nanobanana.jpg',
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
        areaServed: {
            '@type': 'City',
            name: 'Hyderabad',
        },
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'What is a scalable office space?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'A scalable office space allows businesses to expand their team size without relocating, offering flexible layouts, modular seating, and infrastructure that grows with your headcount.',
                },
            },
            {
                '@type': 'Question',
                name: 'Why do companies prefer managed offices for scaling?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Managed offices offer flexibility, lower setup costs, easy expansion within the same building or network, and ready-to-use infrastructure — eliminating the disruption of repeated relocations.',
                },
            },
            {
                '@type': 'Question',
                name: 'How fast can a company scale office space?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'With managed offices, companies can expand within weeks. PrimeDesk helps you find offices where you can add seats, upgrade to a larger floor, or move to an adjacent unit without operational downtime.',
                },
            },
            {
                '@type': 'Question',
                name: 'Which areas are best for scalable offices in Hyderabad?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Hitech City is ideal for startups and tech companies. Financial District is best for enterprises and GCC setups. Gachibowli offers a balanced mix of cost and connectivity.',
                },
            },
            {
                '@type': 'Question',
                name: 'What does it cost to scale office space in Hyderabad?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Approximate monthly costs: 20–50 seats ₹1.5L–₹6L; 50–100 seats ₹4L–₹12L; 100–200+ seats ₹10L–₹40L+. Costs vary by location, building grade, and customisation.',
                },
            },
            {
                '@type': 'Question',
                name: 'Does PrimeDesk charge brokerage for office space?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'No. PrimeDesk offers zero brokerage for tenants. We connect businesses with verified workspace operators and developers, providing transparent comparisons and fast turnaround.',
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
            <ScalableOfficeBlogPage />
        </>
    );
}