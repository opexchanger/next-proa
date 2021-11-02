import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import pagesList from '../../../data/pagesList';
import getSelectRegion from '../../../utils/getSelectRegion';
import { btnVariants, liVariants, navVariants, ulVariants } from './animationVariants';
import runMultiple from '../../../utils/runMultiple';

import styles from './mobile-navigation.module.scss';

export default function MobileNavigation({ page }) {
  const [showMenu, setShowMenu] = useState(false);
  const bindClickToRegion = getSelectRegion();

  // TODO esse componente roda toda vez que menu abre, aplicar memo
  return (
    <AnimatePresence>
      {/* botão abrir menu do mobile */}
      <button
        aria-label='Abrir o menu'
        className={styles.nav__btnOpen}
        onClick={() => setShowMenu(true)}
      >
        &#9776;
      </button>

      {/* menu do mobile */}
      <motion.nav key="nav" className={styles.nav}
        variants={navVariants}
        initial="closed"
        animate={showMenu ? "open" : "closed"}
        transition={{ stiffness: 100 }}
      >
        {/* botão fechar menu do mobile */}
        <motion.button key="button"
          aria-label='Fechar o menu'
          className={styles.nav__btnClose}
          onClick={() => setShowMenu(false)}
          variants={btnVariants}
          transition={{ delay: 0.5, duration: 0.3 }}
        >
          &times;
        </motion.button>

        {/* itens do menu */}
        <motion.ul key="ul" className={styles.nav__list}
          variants={ulVariants}
        >
          {pagesList.map(({ name, title, url, selectRegion }) => {
            let selection = selectRegion ? selectRegion : 0;
            const handleClick = runMultiple(bindClickToRegion(selection), () => setShowMenu(false));

            return (
              <motion.li key={name} className={styles.nav__item}
                variants={liVariants}
              >
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
              </motion.li>
            )
          })}
        </motion.ul>
      </motion.nav>
    </AnimatePresence>
  )
}