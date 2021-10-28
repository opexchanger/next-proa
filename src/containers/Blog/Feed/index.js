import styles from './feed.module.scss';

export default function Feed({ children }) {
  return (
    <div className={styles.container}>
      <ul className={styles.limiter}>{children}</ul>
    </div>
  );
}
