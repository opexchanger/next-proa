import styles from './block.module.scss';

export default function Block({ cover, icon, title }) {
  return (
    <div className={styles.block} style={{ backgroundImage: `url(/img/${cover})` }}>
      {icon && <img src={`/img/${icon}`} alt="Icon" className={styles.block__icon} />}
      <h3 className={styles.block__title}>{title}</h3>
      <div className={styles.block__overlay}></div>
    </div>
  );
}
