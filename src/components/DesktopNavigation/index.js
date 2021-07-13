import Link from 'next/link';

import pagesList from '../../data/pagesList';

import styles from './desktop-navigation.module.scss';

export default function DesktopNavigation({ page }) {
  return (
    <nav className={styles.navDesktop}>
      <ul className={styles.navDesktop__list}>
        {pagesList.map(({ name, title, url }) => (
          <li key={name} className={styles.navDesktop__item}>
            <Link href={url}>
              <a className={`${styles.navDesktop__link} ${page === name && styles.current}`}>
                {title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
