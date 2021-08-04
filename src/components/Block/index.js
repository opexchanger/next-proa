import Link from 'next/link';
import { motion } from 'framer-motion';

import styles from './block.module.scss';

export default function Block({ cover, icon, title, link, handleClick }) {
  return (
    <Link href={link}>
      <a onClick={handleClick}>
        <motion.div
          initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
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
        </motion.div>
      </a>
    </Link>
  );
}
