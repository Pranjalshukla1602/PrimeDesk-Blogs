'use client';

import dynamic from 'next/dynamic';

const WhatsAppButton = dynamic(() => import('./WhatsAppButton'), { ssr: false });
const StickyMobileCTA = dynamic(() => import('./StickyMobileCTA'), { ssr: false });
const DeferredStyles = dynamic(() => import('./DeferredStyles'), { ssr: false });

export default function ClientExtras() {
  return (
    <>
      <WhatsAppButton />
      <StickyMobileCTA />
      <DeferredStyles />
    </>
  );
}
