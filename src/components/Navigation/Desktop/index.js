import { useRouter } from 'next/router'

import pagesList from '../../../data/pagesList';
import getSelectRegion from '../utils/getSelectRegion';

import styles from './desktop-navigation.module.scss';

export default function DesktopNavigation({ page }) {
  const router = useRouter();
  const bindToRegion = getSelectRegion();

  const handleClick = (e, url, changeRegion) => {
    e.preventDefault();
    router.push(url).then(changeRegion());
  }

  return (
    <nav className={styles.navDesktop}>
      <ul className={styles.navDesktop__list}>
        {pagesList.map(({ name, title, url, selectRegion }) => {
          const region = selectRegion ? selectRegion : 0;
          const changeRegionOnClick = bindToRegion(region);

          return (
            <li key={name} className={styles.navDesktop__item}>
              <a className={`${styles.navDesktop__link} ${page === name && styles.current}`}
                onClick={(e) => handleClick(e, url, changeRegionOnClick)}
              >
                {title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
