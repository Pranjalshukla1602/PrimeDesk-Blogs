import HeroSection from '@/components/HeroSection';
import LeadForm from '@/components/LeadForm';
import AmenitiesGrid from '@/components/AmenitiesGrid';
import TestimonialSlider from '@/components/TestimonialSlider';
import CTABanner from '@/components/CTABanner';
import styles from './ServicePageTemplate.module.css';

export default function ServicePageTemplate({ data }) {
  return (
    <>
      <HeroSection
        headline={data.heroHeadline}
        subtext={data.heroSubtext}
        compact
      />

      <section className="section">
        <div className="container">
          <div className={styles.layout}>
            <div className={styles.content}>
              <div className={styles.intro}>
                <h2>{data.title}</h2>
                <div className="divider" style={{ margin: '16px 0' }}></div>
                <p className={styles.introText}>{data.heroSubtext}</p>
              </div>

              {data.sections.map((section, i) => (
                <div key={i} className={styles.sectionBlock}>
                  <div className={styles.sectionImage}>
                    <div className={styles.imagePlaceholder}>
                      <span>🏢</span>
                    </div>
                  </div>
                  <div className={styles.sectionContent}>
                    <h3>{section.title}</h3>
                    <p>{section.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <aside className={styles.sidebar}>
              <LeadForm
                variant="sidebar"
                title="Get a Free Consultation"
                subtitle="Tell us your requirements and we'll match you with the perfect workspace."
              />
            </aside>
          </div>
        </div>
      </section>

      <AmenitiesGrid />
      <TestimonialSlider />
      <CTABanner
        headline={`Interested in ${data.title}?`}
        subtext="Contact our team today for a personalized workspace solution tailored to your business needs."
      />
    </>
  );
}
