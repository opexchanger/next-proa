import Link from 'next/link';

import styles from './desktop-navigation.module.scss';

export default function DesktopNavigation({ page }) {
  return (
    <nav className={styles.navDesktop}>
      <ul className={styles.navDesktop__list}>
        <li className={styles.navDesktop__item}>
          <Link href="/">
            <a className={`${styles.navDesktop__link} ${page === 'home' && styles.current}`}>
              Home
            </a>
          </Link>
        </li>
        <li className={styles.navDesktop__item}>
          <Link href="/destinos">
            <a
              className={`${styles.navDesktop__link} 
              ${page === 'destinos' && styles.current}`}
            >
              Destinos
            </a>
          </Link>
        </li>
        <li className={styles.navDesktop__item}>
          <Link href="/hospedagens">
            <a
              className={`${styles.navDesktop__link} 
              ${page === 'hospedagens' && styles.current}`}
            >
              Hospedagens
            </a>
          </Link>
        </li>
        <li className={styles.navDesktop__item}>
          <a
            href="/contato"
            className={`${styles.navDesktop__link} ${page === 'contato' && styles.current}`}
          >
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
}
