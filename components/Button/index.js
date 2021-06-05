import Link from 'next/link';

import styles from './button.module.scss';

export default function Button({ children, to, cta, block, ...restProps }) {
  return (
    <Link href={to}>
      <a
        className={`
          ${styles.button} 
          ${cta && styles.buttonCta} 
          ${block && styles.buttonBlock}
        `}
        {...restProps}
      >
        {children}
      </a>
    </Link>
  );
}
