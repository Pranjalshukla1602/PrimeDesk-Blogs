import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getIcon } from '@/lib/icons';
import styles from './ServiceCard.module.css';

export default function ServiceCard({ title, description, href, icon, index = 0 }) {
  const IconComponent = getIcon(icon, 'Building2');

  return (
    <Link href={href} className={styles.card} style={{ animationDelay: `${index * 0.1}s` }}>
      <div className={styles.iconWrap}>
        <IconComponent size={28} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{description}</p>
      <span className={styles.link}>
        Know More
        <ArrowRight size={16} />
      </span>
    </Link>
  );
}
