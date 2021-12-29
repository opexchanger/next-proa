import styles from './tag.module.scss';

export default function DiscountTag({ value, format }) {
  return (
    <div className={`${styles.tag} ${format === 'absolute' ? styles.absolute : ''}`}>
      <div className={styles.text}>{value}</div>
    </div>
  );
}
