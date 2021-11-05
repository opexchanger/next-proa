import { useState, useRef } from 'react';
import { useRouter } from 'next/router';

import pagesList from '../../../data/pagesList';
import getSelectRegion from '../../../utils/getSelectRegion';
import Dropdown from '../../Dropdown';

import styles from './desktop-navigation.module.scss';

export default function DesktopNavigation({ page }) {
  const router = useRouter();
  const bindToRegion = getSelectRegion();

  const node = useRef();
  const [openDropdown, setOpenDropdown] = useState(false);
  const toggleDropdown = () => {
    setOpenDropdown((current) => !current);
  }

  const handleClick = (e, url, changeRegion) => {
    e.preventDefault();
    router.push(url).then(changeRegion());
  }

  return (
    <nav className={styles.navDesktop}>
      <ul className={styles.navDesktop__list}>
        <li className={`${styles.navDesktop__item} ${styles.item__drop}`} onClick={toggleDropdown} ref={node}>
          <span className={styles.link__drop}>
            Viagens
          </span>
          <Dropdown open={openDropdown} setOpen={setOpenDropdown} node={node}>
            {pagesList.filter(({ viagem }) => viagem).map(({ name, title, url, selectRegion }) => {
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
          </Dropdown>
        </li>

        {pagesList.filter(({ viagem }) => !viagem).map(({ name, title, url, order }) => {
          return (
            <li key={name} className={styles.navDesktop__item} style={{ order: `${order}` }}>
              <a href={url}
                className={`${styles.navDesktop__link} ${page === name && styles.current}`}
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
