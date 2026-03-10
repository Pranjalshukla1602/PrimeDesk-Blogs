import HeroSection from '@/components/HeroSection';
import LeadForm from '@/components/LeadForm';
import { COMPANY } from '@/lib/data';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
  title: 'Contact Us - PrimeDesk',
  description: 'Have questions about managed offices, coworking spaces, or workspace solutions? Contact PrimeDesk to speak with our team.',
};

export default function ContactPage() {
  const contactCards = [
    { icon: Phone, title: 'Call us', subtitle: 'Speak to our friendly team.', items: COMPANY.phone, type: 'phone' },
    { icon: Mail, title: 'Chat to Support', subtitle: 'Reach out directly via email.', items: [COMPANY.email], type: 'email' },
    { icon: MapPin, title: 'Visit our Office', subtitle: 'Here to help always', items: [COMPANY.address], type: 'text' },
    { icon: Clock, title: 'Timings', subtitle: 'Available to assist', items: [COMPANY.timings], type: 'text' },
  ];

  return (
    <>
      <HeroSection
        headline="Connect with us"
        subtext="Have a question or need assistance? Reach out via phone, email, or visit us in person."
        compact
      />

      <section className="section">
        <div className="container">
          <div className={styles.layout}>
            <div className={styles.formSide}>
              <LeadForm
                title="Quick Form, Faster Workspace"
                subtitle="Let's get started! Fill in your details and we'll match you with the ideal workspace."
              />
            </div>
            <div className={styles.infoSide}>
              {contactCards.map((card, i) => (
                <div key={i} className={styles.infoCard}>
                  <div className={styles.infoIcon}>
                    <card.icon size={24} />
                  </div>
                  <div>
                    <h4>{card.title}</h4>
                    <span className={styles.infoSubtitle}>{card.subtitle}</span>
                    {card.items.map((item, j) => (
                      <p key={j} className={styles.infoItem}>
                        {card.type === 'phone' ? (
                          <a href={`tel:${item.replace(/\s/g, '')}`}>{item}</a>
                        ) : card.type === 'email' ? (
                          <a href={`mailto:${item}`}>{item}</a>
                        ) : (
                          item
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className={styles.mapSection}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3296!2d78.3816!3d17.4435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c5d69df%3A0x19ab29cef53cb7e0!2sT-Hub%20Phase%202!5e0!3m2!1sen!2sin!4v1690000000000"
          width="100%"
          height="450"
          style={{ border: 0, display: 'block' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="PrimeDesk Office Location"
        ></iframe>
      </section>
    </>
  );
}
