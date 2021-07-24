import Link from 'next/link';
import { useState } from 'react';

import pagesList from '../../../data/pagesList';
import getSelectRegion from '../utils/getSelectRegion';

import styles from './mobile-navigation.module.scss';

export default function MobileNavigation({ page }) {
  const [showMenu, setShowMenu] = useState(false);
  const getFunctionToSelectThisRegion = getSelectRegion();

  // TODO esse componente roda toda vez que menu abre, aplicar memo
  return (
    <>
      {/* botão abrir menu do mobile */}
      <button
        aria-label='Abrir o menu'
        className={styles.nav__btnOpen}
        onClick={() => setShowMenu(true)}
      >
        &#9776;
      </button>

      {/* menu do mobile */}
      <nav
        className={`${showMenu
          ? [styles.nav, styles.navigationOpen].join(' ')
          : styles.nav
          }`}
      >
        {/* botão fechar menu do mobile */}
        <button
          aria-label='Fechar o menu'
          className={styles.nav__btnClose}
          onClick={() => setShowMenu(false)}
        >
          &times;
        </button>

        {/* itens do menu */}
        <ul className={styles.nav__list}>
          {pagesList.map(({ name, title, url, selectRegion }) => {
            let selection = selectRegion ? selectRegion : 0;
            const handleClick = getFunctionToSelectThisRegion(selection, () => setShowMenu(false));

            return (
              <li key={name} className={styles.nav__item}>
                <Link href={url}>
                  <a
                    className={`${page === name
                      ? [styles.nav__link, styles.current].join(' ')
                      : styles.nav__link
                      }`}
                    onClick={handleClick}
                  >
                    {title}
                  </a>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}