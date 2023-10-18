import React from 'react';
import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}> {/* Використовуємо стиль для секції */}
    {title && <h2 className={styles.title}>{title}</h2>} {/* Використовуємо стиль для заголовку */}
    <ul className={styles.statList}> {/* Використовуємо стиль для списку */}
      {stats.map(({ id, label, percentage }) => (
        <li key={id} className={styles.item}> {/* Використовуємо стиль для елемента списку */}
          <span className={styles.label}>{label}</span> {/* Використовуємо стиль для мітки */}
          <span className={styles.percentage}>{percentage}%</span> {/* Використовуємо стиль для відсотка */}
        </li>
      ))}
    </ul>
  </section>
);

export default Statistics;