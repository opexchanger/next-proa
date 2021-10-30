import styles from './hero.module.scss';

export default function Hero({ children }) {
  return (
    <section className={styles.hero}>
      {children}
    </section>
  );
}
