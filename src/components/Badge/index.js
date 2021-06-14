import styles from './badge.module.scss';

export default function Badge({ span, icon, bgColor, text }) {
  return (
    <div className={styles.badge} style={{ backgroundColor: bgColor }}>
      <span className={icon ? styles.containIcon : null}>{span}</span>
      <div className={styles.text}>{text}</div>
    </div>
  );
}
