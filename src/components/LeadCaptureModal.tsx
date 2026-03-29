'use client';
import LeadCaptureForm from './LeadCaptureForm';

type LeadCaptureModalProps = {
    isOpen: boolean;
    onClose: () => void;
    source: string;
    title?: string;
    subtitle?: string;
};

export default function LeadCaptureModal({ 
    isOpen, 
    onClose, 
    source, 
    title = "Get Expert Workspace Advice in 24 Hours", 
    subtitle = "Personalized office suggestions based on your team size, budget, and growth plans." 
}: LeadCaptureModalProps) {
    return (
        <div
            className={`modal-overlay ${isOpen ? 'open' : ''}`}
            id="modal"
            role="dialog"
            aria-modal="true"
            aria-label="Lead capture form"
        >
            <div className="modal-box">
                <div className="modal-top"></div>
                <button className="modal-close" onClick={onClose} aria-label="Close dialog">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                </button>
                <div className="modal-body">
                    <LeadCaptureForm 
                        source={source} 
                        title={title} 
                        subtitle={subtitle} 
                        showTrustBadges={false} 
                    />
                    
                    <div className="nm-footer">
                        <p className="nm-footer-text">Prefer instant help? Call or WhatsApp us directly.</p>
                        <div className="nm-action-btns">
                            <a href="tel:+917993726302" className="nm-action-btn nm-btn-blue">
                                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.69 19a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                Call<span className="nm-mobile-hide">{' '}Now</span>
                            </a>
                            <a href="https://wa.me/918978426302?text=Hello,%20I%20would%20like%20to%20inquire%20about%20office%20spaces%20in%20Hyderabad." target="_blank" rel="noopener noreferrer" className="nm-action-btn nm-btn-green">
                                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                                WhatsApp<span className="nm-mobile-hide">{' '}Chat</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
