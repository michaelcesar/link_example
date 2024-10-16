import styles from './hero_links.module.css';

export default function HeroLinks() {
  return (
    <aside className={styles.wrapper}>
      <p className={styles.text}>
        <span className={styles.highlighted}>Transforme</span> sua presença
        digital <br></br>e{' '}
        <span className={styles.highlighted}>impulsione</span> seu{' '}
        <span className={styles.highlighted}>negócio</span>.
      </p>
    </aside>
  );
}
