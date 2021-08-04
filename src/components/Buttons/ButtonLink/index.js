import Link from 'next/link';

import styles from './button-link.module.scss';

export default function ButtonLink({ children, to, type, ...restProps }) {
  return (
    <Link href={to}>
      <a
        className={`
          ${styles.button} 
          ${type === 'cta' ? styles.buttonCta : type === 'block' ? styles.buttonBlock : false}
        `}
        {...restProps}
      >
        {children}
      </a>
    </Link>
  );
}
