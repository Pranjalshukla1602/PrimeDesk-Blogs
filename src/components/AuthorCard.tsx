'use client';
import './AuthorCard.css';

export default function AuthorCard({
  name = 'Vibhuti Jain',
  role = 'Director',
  company = 'PrimeDesk',
  linkedinUrl = 'https://linkedin.com/in/vibhuti-jain-67b06b20',
  avatarUrl = '/images/vibhuti-jain.png',
}: {
  name?: string;
  role?: string;
  company?: string;
  linkedinUrl?: string;
  avatarUrl?: string;
}) {
  const initials = name.split(' ').map(n => n[0]).join('');

  return (
    <section className="author-section">
      <div className="wrap">
        <div className="author-card">
          {/* Decorative elements */}
          <div className="author-accent-top" />
          <div className="author-accent-dot author-dot-1" />
          <div className="author-accent-dot author-dot-2" />

          <div className="author-label">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            About the Author
          </div>

          <div className="author-content">
            <div className="author-avatar-wrap">
              {avatarUrl ? (
                <img src={avatarUrl} alt={name} className="author-avatar-img" />
              ) : (
                <div className="author-avatar-fallback">
                  <span>{initials}</span>
                </div>
              )}
              <div className="author-avatar-ring" />
              <div className="author-status-dot" />
            </div>

            <div className="author-info">
              <div className="author-name-row">
                <h3 className="author-name">{name}</h3>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="author-linkedin"
                  aria-label={`${name} on LinkedIn`}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
              <p className="author-role">
                {role} <span className="author-at">at</span> <strong>{company}</strong>
              </p>
              <p className="author-bio">
                Vibhuti Jain is the Director at PrimeDesk and a workspace strategy consultant specializing in GCC setups, corporate office leasing, and enterprise workspace advisory. She helps global companies, IT firms, and startups find offices that support growth, innovation, and employee experience. She is also the founder of{' '}
                <a href="https://touchalifeorg.com/" target="_blank" rel="noopener noreferrer" className="author-link">Touch A Life Foundation</a>, supporting girls&apos; education and empowerment, and is a TEDx speaker and award-winning leader.
              </p>

              <div className="author-tags">
                <span className="author-tag">GCC Strategy</span>
                <span className="author-tag">Workspace Advisory</span>
                <span className="author-tag">Hyderabad Market</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
