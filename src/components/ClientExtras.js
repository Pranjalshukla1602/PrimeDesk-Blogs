'use client';

import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('./Footer'), { ssr: false });
const WhatsAppButton = dynamic(() => import('./WhatsAppButton'), { ssr: false });
const StickyMobileCTA = dynamic(() => import('./StickyMobileCTA'), { ssr: false });
const DeferredStyles = dynamic(() => import('./DeferredStyles'), { ssr: false });

export default function ClientExtras() {
  return (
    <>
      <Footer />
      <WhatsAppButton />
      <StickyMobileCTA />
      <DeferredStyles />
    </>
  );
}
