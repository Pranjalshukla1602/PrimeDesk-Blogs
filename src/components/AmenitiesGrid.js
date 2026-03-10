import * as Icons from 'lucide-react';
import { AMENITIES } from '@/lib/data';
import styles from './AmenitiesGrid.module.css';

export default function AmenitiesGrid() {
  return (
    <section className="section section--gray">
      <div className="container">
        <div className="section__header">
          <span className="section__label">Amenities</span>
          <h2>Everything You Need, Under One Roof</h2>
          <div className="divider"></div>
        </div>
        <div className={styles.grid}>
          {AMENITIES.map((item, i) => {
            const Icon = Icons[item.icon] || Icons.Check;
            return (
              <div key={i} className={styles.item}>
                <div className={styles.iconWrap}>
                  <Icon size={24} />
                </div>
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
