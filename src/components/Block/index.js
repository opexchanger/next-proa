import Link from 'next/link';

import styles from './block.module.scss';

export default function Block({ cover, icon, title, link, handleClick }) {
  return (
    <Link href={link}>
      <a onClick={handleClick}>
        <div
          className={styles.block}
          style={{ backgroundImage: `url(${cover})` }}
        >
          {icon && (
            <img
              src={`/img/${icon}`}
              alt='Icon'
              className={styles.block__icon}
            />
          )}
          <h3 className={styles.block__title}>{title}</h3>
          <div className={styles.block__overlay}></div>
        </div>
      </a>
    </Link>
  );
}
