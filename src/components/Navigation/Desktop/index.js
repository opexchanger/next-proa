import Link from 'next/link';

import pagesList from '../../../data/pagesList';
import getSelectRegion from '../utils/getSelectRegion';

import styles from './desktop-navigation.module.scss';

export default function DesktopNavigation({ page }) {
  const getFunctionToSelectThisRegion = getSelectRegion();

  return (
    <nav className={styles.navDesktop}>
      <ul className={styles.navDesktop__list}>
        {pagesList.map(({ name, title, url, selectRegion }) => {
          let selection = selectRegion ? selectRegion : 0;
          const handleClick = getFunctionToSelectThisRegion(selection);

          return (
            <li key={name} className={styles.navDesktop__item}>
              <Link href={url}>
                <a className={`${styles.navDesktop__link} ${page === name && styles.current}`}
                  onClick={handleClick}>
                  {title}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
