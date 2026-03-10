import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import CTABanner from '@/components/CTABanner';
import { PRIMARY_SERVICES, ADDITIONAL_SERVICES } from '@/lib/data';

export const metadata = {
  title: 'Our Services - PrimeDesk',
  description: 'Explore PrimeDesk\'s managed office and coworking services, including plug-and-play offices, private & shared workspaces, custom office solutions, and multi-city offices.',
};

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        headline="Our Services"
        subtext="Experience seamless business growth with PrimeDesk through expert support, flexible spaces, smart savings, and effortless expansion across premium city locations."
        compact
      />

      <section className="section">
        <div className="container">
          <div className="section__header">
            <span className="section__label">Workspace Solutions</span>
            <h2>Premium Office Solutions for Every Business</h2>
            <div className="divider"></div>
          </div>
          <div className="grid grid--3">
            {PRIMARY_SERVICES.map((service, i) => (
              <ServiceCard key={service.href} {...service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="section__header">
            <span className="section__label">Additional Services</span>
            <h2>More Ways We Help Your Business Succeed</h2>
            <div className="divider"></div>
          </div>
          <div className="grid grid--3">
            {ADDITIONAL_SERVICES.map((service, i) => (
              <ServiceCard key={service.href} {...service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Can't Decide Which Workspace Is Right?"
        subtext="Talk to our workspace experts for a free consultation. We'll help you find the perfect solution."
      />
    </>
  );
}
