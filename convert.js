const fs = require('fs');
const html = fs.readFileSync('primedesk.html', 'utf8');

// Extract the body (everything between <body> and </body>)
const bodyMatch = html.match(/<body>([\s\S]*?)<\/body>/);
if (!bodyMatch) {
  console.error('No body found');
  process.exit(1);
}

let bodyHtml = bodyMatch[1];

// Remove the inline script block at the end
bodyHtml = bodyHtml.replace(/<!-- ══════ JAVASCRIPT ══════ -->[\s\S]*?<script>[\s\S]*?<\/script>/, '');

// Convert HTML to JSX
// 1. class -> className
let jsx = bodyHtml.replace(/\bclass="/g, 'className="');

// 2. Self closing tags (img, input, br, hr, polygon, polyline, circle, path, line, rect)
jsx = jsx.replace(/<(img|input|br|hr)([^>]*?)(?<!\/)>/g, '<$1$2 />');

// Special for SVG tags since they are strict in React, though lowercase properties are sometimes fine, 
// wait, style="display:none;" -> style={{ display: 'none' }}
jsx = jsx.replace(/style="([^"]*)"/g, (match, p1) => {
  const styles = p1.split(';').filter(s => s.trim() !== '');
  const styleObj = {};
  styles.forEach(s => {
    let [key, ...valParts] = s.split(':');
    let val = valParts.join(':').trim();
    if (!key) return;
    key = key.trim();
    // camelCase the key
    key = key.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    styleObj[key] = val;
  });
  return `style={${JSON.stringify(styleObj)}}`;
});

// Remove onclick, onmouseover, onmouseout events
jsx = jsx.replace(/\son[a-z]+="[^"]*"/gi, '');
jsx = jsx.replace(/\son[a-z]+=\{[^}]*\}/gi, '');

// stroke-width -> strokeWidth
jsx = jsx.replace(/stroke-width/g, 'strokeWidth');

// Fix comments
jsx = jsx.replace(/<!--(.*?)-->/g, '{/* $1 */}');

// Build the React component framework
const reactComponent = `
'use client';
import { useState, useEffect, useRef } from 'react';
import './primedesk.css';

export default function GCCBlogPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [formStep, setFormStep] = useState('phone');
  const [phone, setPhone] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            if (entry.target.id && !entry.target.classList.contains('reveal')) {
              setActiveSection(entry.target.id);
            }
          }
        });
      },
      { rootMargin: '-40px 0px' }
    );
    
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    
    // TOC active logic
    const sections = document.querySelectorAll('section[id], div[id="faq"]');
    const tocObs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { rootMargin: '-25% 0px -65% 0px' });
    sections.forEach((s) => tocObs.observe(s));
    
    return () => {
      observer.disconnect();
      tocObs.disconnect();
    };
  }, []);

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    if (phone.length >= 10) setFormStep('details');
  };

  const handleDetailsSubmit = (e) => {
    e.preventDefault();
    setFormStep('success');
  };

  const openModal = (e) => {
    if(e) e.preventDefault();
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = '';
  };
  
  const submitModal = (e) => {
    e.preventDefault();
    // Simulate modal success step
    setFormStep('modal-success');
  };

  return (
    <div className="gcc-page">
      ${jsx.split('\\n').join('\\n      ')}
    </div>
  );
}
`;

fs.writeFileSync('src/app/gcc-offices-hyderabad/GCCBlogPage.tsx', reactComponent);
console.log('Conversion complete!');
