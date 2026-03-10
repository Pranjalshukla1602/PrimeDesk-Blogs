// ─── Company Info ───
export const COMPANY = {
  name: 'PrimeDesk',
  tagline: 'Where Ambitious Teams Find Inspiring Workspaces',
  description: 'Empowering businesses with flexible, premium workspaces, PrimeDesk fosters innovation, collaboration, and community across a growing network of fully serviced locations.',
  phone: ['+91 7993726302', '+91 8977026302'],
  email: 'info@primedesk.co.in',
  address: 'First floor T Hub Phase 2 20, Inorbit Mall Rd, Vittal Rao Nagar, Madhapur, Hyderabad, Telangana 500081',
  whatsapp: '+918978426302',
  timings: 'Monday to Saturday: 9:00 AM – 7:00 PM',
  social: {
    instagram: 'https://www.instagram.com/primedeskindia/',
    facebook: 'https://www.facebook.com/PrimeDeskIndia/',
    linkedin: 'https://www.linkedin.com/company/primedesk-workspacesolutions',
    youtube: 'https://www.youtube.com/@PRIME-DESK',
  },
  url: 'https://primedesk.co.in',
};

// ─── Navigation ───
export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us/' },
  {
    label: 'Our Services',
    href: '/our-services/',
    children: [
      { label: 'Private & Shared Workspaces', href: '/private-shared-workspaces/' },
      { label: 'Plug & Play Offices', href: '/plug-play-offices/' },
      { label: 'Managed Office Space', href: '/managed-office-space/' },
      { label: 'Best Customized Office Space', href: '/best-customized-office-space/' },
      { label: 'Multi-City Offices', href: '/multi-city-offices/' },
      { label: 'Co-Working Spaces', href: '/co-working-spaces/' },
    ],
  },
  { label: 'Locations', href: '/locations/' },
  { label: 'Gallery', href: '/gallery/' },
  { label: 'Contact Us', href: '/contact-us/' },
];

// ─── Cities ───
export const CITIES = [
  { name: 'Hyderabad', icon: '🏙️' },
  { name: 'Bangalore', icon: '🌆' },
  { name: 'Chennai', icon: '🌇' },
  { name: 'Delhi', icon: '🏛️' },
];

// ─── Stats ───
export const STATS = [
  { value: 4, suffix: '+', label: 'Cities' },
  { value: 500, suffix: '+', label: 'Happy Clients' },
  { value: 100000, suffix: '+', label: 'Sq. Ft. Managed' },
  { value: 50, suffix: '+', label: 'Workspace Locations' },
];

// ─── Services (Primary) ───
export const PRIMARY_SERVICES = [
  {
    title: 'Private & Shared Workspaces',
    description: 'Flexible workspaces built for focus, teamwork, comfort, and better productivity.',
    href: '/private-shared-workspaces/',
    icon: 'Building2',
  },
  {
    title: 'Plug & Play Offices',
    description: 'Fully furnished offices with quick setup, modern amenities, and zero operational delays.',
    href: '/plug-play-offices/',
    icon: 'Plug',
  },
  {
    title: 'Managed Office Space',
    description: 'Fully serviced, hassle-free offices with custom setups, managed operations, and seamless workflow.',
    href: '/managed-office-space/',
    icon: 'Settings',
  },
  {
    title: 'Best Customized Office Space',
    description: 'Customized office solutions designed to match your business needs, team size, and brand style.',
    href: '/best-customized-office-space/',
    icon: 'Paintbrush',
  },
  {
    title: 'Multi-City Offices',
    description: 'Access fully equipped offices across multiple cities with instant setup and zero downtime.',
    href: '/multi-city-offices/',
    icon: 'Globe',
  },
  {
    title: 'Co-Working Spaces',
    description: 'Workspaces crafted for collaboration, scalability, affordability across major Indian cities.',
    href: '/co-working-spaces/',
    icon: 'Users',
  },
];

// ─── Additional Services ───
export const ADDITIONAL_SERVICES = [
  {
    title: 'Zero Brokerage',
    description: 'Hassle-free leasing with zero brokerage, offering cost-effective, transparent workspace solutions.',
    href: '/zero-brokerage/',
    icon: 'BadgePercent',
  },
  {
    title: 'Cost Effective Office',
    description: 'Office solutions that maximize value without compromising on quality or flexibility.',
    href: '/cost-effective-office/',
    icon: 'PiggyBank',
  },
  {
    title: 'Guided Visits & Consultation',
    description: 'Personalized workspace tours and expert consultations to match your business with perfect solutions.',
    href: '/guided-visits-one-to-one-consultation/',
    icon: 'Compass',
  },
  {
    title: 'Hassle-Free Experience',
    description: 'Ready-to-use offices and complete end-to-end support for a seamless experience.',
    href: '/hassle-free-experience/',
    icon: 'Sparkles',
  },
  {
    title: 'Conventional Office Space',
    description: 'Traditional office spaces with zero brokerage, easy leasing, and full support.',
    href: '/conventional-office-space/',
    icon: 'Landmark',
  },
];

// ─── Why Choose Us Features ───
export const FEATURES = [
  { title: 'Zero Capex', description: 'Fully furnished spaces with no upfront investment or furniture costs.', icon: 'CircleDollarSign' },
  { title: 'Less Setup Time', description: 'Ready-to-use infrastructure to start your work on day one.', icon: 'Clock' },
  { title: 'Cost-Effective', description: '20%-30% cheaper per desk compared to traditional office leasing.', icon: 'TrendingDown' },
  { title: 'Fully Serviced', description: 'Internet, housekeeping, reception, and more included.', icon: 'Shield' },
  { title: 'Easy Team Expansion', description: 'No restrictions on adding desks or expanding office space.', icon: 'UserPlus' },
  { title: 'Prime Locations', description: 'Hyderabad, Bangalore, Chennai, and Delhi.', icon: 'MapPin' },
  { title: 'Customizable Spaces', description: 'Office layouts tailored to suit unique business needs.', icon: 'LayoutGrid' },
  { title: 'Seamless Experience', description: 'Hassle-free solutions with dedicated support.', icon: 'Headphones' },
];

// ─── Testimonials ───
export const TESTIMONIALS = [
  {
    text: 'PrimeDesk made our expansion effortless. Their flexible workspaces and support helped us scale quickly without worrying about infrastructure or operations.',
    author: 'Rajesh K.',
    role: 'CEO, Tech Startup',
  },
  {
    text: 'We moved into PrimeDesk and instantly felt the professionalism. Premium setup, zero brokerage, and amazing service—it\'s perfect for growing teams.',
    author: 'Priya M.',
    role: 'Operations Head, FinTech',
  },
  {
    text: 'Working from PrimeDesk transformed our daily productivity. The plug-and-play setup and vibrant community helped spark new ideas and collaborations.',
    author: 'Arun S.',
    role: 'Founder, Design Agency',
  },
];

// ─── Amenities ───
export const AMENITIES = [
  { label: 'High-Speed Internet', icon: 'Wifi' },
  { label: 'Meeting Rooms', icon: 'Presentation' },
  { label: '24/7 Access', icon: 'Clock' },
  { label: 'Parking', icon: 'Car' },
  { label: 'Cafeteria', icon: 'Coffee' },
  { label: 'Reception', icon: 'ConciergeBell' },
  { label: 'Housekeeping', icon: 'Sparkle' },
  { label: 'IT Support', icon: 'Monitor' },
  { label: 'Security', icon: 'ShieldCheck' },
  { label: 'Power Backup', icon: 'Zap' },
  { label: 'Printer & Scanner', icon: 'Printer' },
  { label: 'CCTV Surveillance', icon: 'Eye' },
];

// ─── Locations ───
export const LOCATIONS = [
  { name: 'Hitech City', city: 'Hyderabad', description: 'Premium offices in the heart of IT hub' },
  { name: 'Gachibowli', city: 'Hyderabad', description: 'Strategic location near Financial District' },
  { name: 'Financial District', city: 'Hyderabad', description: 'Prime business district workspace' },
  { name: 'Madhapur', city: 'Hyderabad', description: 'Vibrant tech corridor workspace' },
  { name: 'Whitefield', city: 'Bangalore', description: 'IT park area with modern facilities' },
  { name: 'Koramangala', city: 'Bangalore', description: 'Startup hub with great connectivity' },
  { name: 'OMR', city: 'Chennai', description: 'IT expressway premium workspace' },
  { name: 'Connaught Place', city: 'Delhi', description: 'Central Delhi premium location' },
];

// ─── Team ───
export const TEAM = [
  {
    name: 'Vibhuti Jain',
    role: 'Founder & Director',
    bio: 'Vibhuti Jain is the founder and director of PrimeDesk, a woman-led real estate company redefining how businesses find and experience office spaces. A TEDx speaker and founder of Touch A Life Foundation, she brings vision, resilience, and purpose-driven leadership.',
  },
  {
    name: 'Rina',
    role: 'Vice President',
    bio: 'Rina drives enterprise partnerships, strategic expansion, and client experience excellence. A seasoned yoga and wellness coach and co-founder of Touch A Life Foundation, her leadership blends strategy with purpose.',
  },
  {
    name: 'Adnan',
    role: 'Digital Marketing Manager',
    bio: 'Adnan oversees PrimeDesk\'s digital ecosystem, combining analytics, creativity, and performance marketing to accelerate brand reach and qualified leads.',
  },
];

// ─── Service Page Data ───
export const SERVICE_PAGES = {
  'private-shared-workspaces': {
    title: 'Private & Shared Workspaces',
    metaTitle: 'Private & Shared Workspaces | Flexible Office Spaces - PrimeDesk',
    metaDescription: 'Flexible private and shared workspaces by PrimeDesk, built for productivity, collaboration, and everyday work needs.',
    heroHeadline: 'Flexible spaces built for privacy, productivity, and collaboration.',
    heroSubtext: 'Personal focus or team energy—your workspace, your way.',
    sections: [
      { title: 'Work Together', description: 'Shared desks in a professional environment designed for collaboration, networking, and idea exchange.' },
      { title: 'Private Productivity', description: 'Dedicated private offices that offer complete focus, silence, and customizable layouts for your team.' },
    ],
  },
  'plug-play-offices': {
    title: 'Plug & Play Offices',
    metaTitle: 'Plug & Play Offices – Ready-to-Use Workspaces - PrimeDesk',
    metaDescription: 'Discover PrimeDesk plug-and-play offices with fully furnished setups, high-speed internet, and immediate move-in convenience.',
    heroHeadline: 'Plug & Play Offices Ready Today for Business.',
    heroSubtext: 'Ready-to-Use. Flexible. Scalable.',
    sections: [
      { title: 'Instant Workspaces', description: 'Move in today with fully furnished offices, ergonomic furniture, and high-speed connectivity.' },
      { title: 'Ready Offices', description: 'Zero setup time—everything from IT infrastructure to housekeeping is ready from day one.' },
    ],
  },
  'managed-office-space': {
    title: 'Managed Office Space',
    metaTitle: 'Managed Office Spaces – Fully Serviced Workspaces - PrimeDesk',
    metaDescription: 'Discover PrimeDesk managed office spaces with all-inclusive pricing, custom fit-outs, and complete operational support.',
    heroHeadline: 'All-Inclusive, Hassle-Free Spaces Designed for Business Growth',
    heroSubtext: 'You get more than just a desk.',
    sections: [
      { title: 'Smooth Workflow', description: 'End-to-end managed office spaces with operations, IT, and facility support handled by PrimeDesk experts.' },
      { title: 'Efficient Operations', description: 'Focus on your business while we handle everything from maintenance to admin services.' },
    ],
  },
  'best-customized-office-space': {
    title: 'Best Customized Office Space',
    metaTitle: 'Customized Office Spaces Designed for Your Business - PrimeDesk',
    metaDescription: 'Flexible, fully customized office spaces by PrimeDesk, designed to reflect your brand, team structure, and working style.',
    heroHeadline: 'Office spaces shaped to fit your business needs.',
    heroSubtext: 'Your space, your way — fully customized workspace solutions.',
    sections: [
      { title: 'Personalized Offices', description: 'Custom-built office environments that reflect your brand identity and team culture.' },
      { title: 'Design Freedom', description: 'Choose layouts, furniture, branding elements, and configurations that work best for your operations.' },
    ],
  },
  'multi-city-offices': {
    title: 'Multi-City Offices',
    metaTitle: 'Multi-City Office Solutions Across India - PrimeDesk',
    metaDescription: 'Scale your business across multiple cities with PrimeDesk\'s centralized multi-city office solutions.',
    heroHeadline: 'Expand Across India with Confidence and Consistency',
    heroSubtext: 'Seamless workspaces across India\'s top business destinations.',
    sections: [
      { title: 'Pan India', description: 'Access premium workspaces in Hyderabad, Bangalore, Chennai, and Delhi with consistent quality.' },
      { title: 'Multiple Locations', description: 'Manage distributed teams with centralized workspace solutions and local execution.' },
    ],
  },
  'co-working-spaces': {
    title: 'Co-Working Spaces',
    metaTitle: 'Coworking Spaces for Flexible Teams & Businesses - PrimeDesk',
    metaDescription: 'Discover PrimeDesk coworking spaces with flexible seating, modern amenities, and pan-India access.',
    heroHeadline: 'Agile, Affordable, and Community-Driven Workspaces',
    heroSubtext: 'Space that works as hard as you do.',
    sections: [
      { title: 'Flexible Seating', description: 'Hot desks and dedicated seats in vibrant community environments perfect for freelancers and startups.' },
      { title: 'Community Hub', description: 'Network, collaborate, and grow with like-minded professionals in a dynamic coworking ecosystem.' },
    ],
  },
  'zero-brokerage': {
    title: 'Zero Brokerage',
    metaTitle: 'Zero Brokerage Office Spaces – Direct & Transparent Deals - PrimeDesk',
    metaDescription: 'Discover PrimeDesk\'s zero brokerage office spaces with direct deals, transparent pricing, and expert guidance.',
    heroHeadline: 'Direct Deals. Zero Brokerage. Maximum Value.',
    heroSubtext: 'Everything You Need, Exclusively Yours with PrimeDesk.',
    sections: [
      { title: 'Broker-Free Access', description: 'Deal directly with PrimeDesk—no middlemen, no hidden charges, no commissions.' },
      { title: 'Direct Deals', description: 'Transparent pricing and expert guidance to help you find the perfect workspace at the best value.' },
    ],
  },
  'cost-effective-office': {
    title: 'Cost Effective Office',
    metaTitle: 'Cost-Effective Office Solutions with Premium Workspaces - PrimeDesk',
    metaDescription: 'Discover PrimeDesk\'s cost-effective office solutions offering fully furnished spaces, zero brokerage, and flexible terms.',
    heroHeadline: 'Premium Workspaces That Save More, Deliver More.',
    heroSubtext: 'Maximize Value. Minimize Costs. Work Smart Daily.',
    sections: [
      { title: 'Smart Savings', description: '20%-30% cheaper per desk compared to traditional leasing with all amenities included.' },
      { title: 'Value Workspaces', description: 'Premium infrastructure at value pricing—zero capex, zero brokerage, maximum productivity.' },
    ],
  },
  'guided-visits-one-to-one-consultation': {
    title: 'Guided Visits & One-to-One Consultation',
    metaTitle: 'Guided Office Visits & One-to-One Consultation - PrimeDesk',
    metaDescription: 'Experience guided office visits and one-to-one consultation to explore workspaces and choose confidently.',
    heroHeadline: 'Personalized Office Tours. Expert Guidance Every Step Forward.',
    heroSubtext: 'Right Space. Real Tour. Clear Choices. Expert Advice.',
    sections: [
      { title: 'Expert Guidance', description: 'Walk through workspaces with our experts who understand your business needs inside out.' },
      { title: 'Office Insights', description: 'Detailed, personalized tours that help you compare options and make informed workspace decisions.' },
    ],
  },
  'hassle-free-experience': {
    title: 'Hassle-Free Experience',
    metaTitle: 'Hassle-Free Office Experience with Fully Managed Workspaces - PrimeDesk',
    metaDescription: 'Experience hassle-free offices with PrimeDesk—fully managed workspaces, quick setup, and zero brokerage.',
    heroHeadline: 'Seamless office solutions with zero stress or setup delays.',
    heroSubtext: 'Your Private Office, Ready Without the Usual Hassles.',
    sections: [
      { title: 'Effortless Workspaces', description: 'From lease signing to move-in—everything handled by PrimeDesk for a stress-free experience.' },
      { title: 'Seamless Solutions', description: 'All operations, maintenance, and administration managed so you can focus purely on business.' },
    ],
  },
  'conventional-office-space': {
    title: 'Conventional Office Space',
    metaTitle: 'Conventional Office Spaces with Corporate Infrastructure - PrimeDesk',
    metaDescription: 'Discover PrimeDesk conventional office spaces offering privacy, structure, and premium infrastructure.',
    heroHeadline: 'Traditional office spaces redefined with flexibility and professionalism.',
    heroSubtext: 'Where timeless professionalism meets modern business infrastructure.',
    sections: [
      { title: 'Classic Comfort', description: 'Traditional office environments with modern amenities, privacy, and dedicated infrastructure.' },
      { title: 'Corporate Stability', description: 'Long-term leasing options with premium build quality and corporate-grade facilities.' },
    ],
  },
};
