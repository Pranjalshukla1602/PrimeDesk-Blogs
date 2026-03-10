'use client';

import { useState } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import styles from './LeadForm.module.css';

export default function LeadForm({ variant = 'default', title = 'Get a Free Consultation', subtitle = 'Fill in your details and our team will get back to you within 24 hours.' }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Valid email is required';
    if (!formData.phone.trim() || !/^[+]?[\d\s-]{10,}$/.test(formData.phone)) errs.phone = 'Valid phone number is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    try {
      const res = await fetch('/api/contact/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className={`${styles.form} ${styles[variant]}`}>
        <div className={styles.success}>
          <CheckCircle size={48} />
          <h3>Thank You!</h3>
          <p>Our team will contact you within 24 hours. Meanwhile, feel free to WhatsApp us for immediate assistance.</p>
          <button className="btn btn--primary btn--sm" onClick={() => setStatus('idle')}>
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.form} ${styles[variant]}`}>
      {title && <h3 className={styles.title}>{title}</h3>}
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      <form onSubmit={handleSubmit}>
        <div className={styles.row}>
          <div className="form__group">
            <input
              type="text"
              className="form__input"
              placeholder="Your Name *"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            {errors.name && <span className="form__error">{errors.name}</span>}
          </div>
          <div className="form__group">
            <input
              type="email"
              className="form__input"
              placeholder="Email Address *"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && <span className="form__error">{errors.email}</span>}
          </div>
        </div>
        <div className={styles.row}>
          <div className="form__group">
            <input
              type="tel"
              className="form__input"
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            {errors.phone && <span className="form__error">{errors.phone}</span>}
          </div>
          <div className="form__group">
            <select
              className="form__select"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            >
              <option value="">Select Service</option>
              <option value="Private & Shared Workspaces">Private & Shared Workspaces</option>
              <option value="Plug & Play Offices">Plug & Play Offices</option>
              <option value="Managed Office Space">Managed Office Space</option>
              <option value="Customized Office Space">Customized Office Space</option>
              <option value="Multi-City Offices">Multi-City Offices</option>
              <option value="Co-Working Spaces">Co-Working Spaces</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <div className="form__group">
          <textarea
            className="form__textarea"
            placeholder="Your Message (optional)"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>
        <button
          type="submit"
          className="btn btn--primary btn--lg"
          disabled={status === 'submitting'}
          style={{ width: '100%' }}
        >
          {status === 'submitting' ? (
            <><Loader2 size={20} className={styles.spinner} /> Submitting...</>
          ) : (
            <><Send size={18} /> Get Free Consultation</>
          )}
        </button>
        {status === 'error' && (
          <p className={styles.errorMsg}>Something went wrong. Please try again or call us directly.</p>
        )}
      </form>
    </div>
  );
}
