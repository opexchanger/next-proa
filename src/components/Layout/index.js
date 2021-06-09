import { useState } from 'react';
import Link from 'next/link';

import Section from '../Section';

import styles from './layout.module.scss';
import utilStyles from '../../styles/utils.module.scss';

export default function Layout({ children, page }) {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <header className={styles.header}>
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
          className={`${
            showMenu
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
            <li className={styles.nav__item}>
              <Link href='/'>
                <a
                  className={`${
                    page === 'home'
                      ? [styles.nav__link, styles.current].join(' ')
                      : styles.nav__link
                  }`}
                >
                  Home
                </a>
              </Link>
            </li>
            <li className={styles.nav__item}>
              <Link href='/destinos'>
                <a
                  className={`${
                    page === 'destinos'
                      ? [styles.nav__link, styles.current].join(' ')
                      : styles.nav__link
                  }`}
                >
                  Destinos
                </a>
              </Link>
            </li>
            <li className={styles.nav__item}>
              <Link href='/'>
                <a
                  className={`${
                    page === 'roteiros'
                      ? [styles.nav__link, styles.current].join(' ')
                      : styles.nav__link
                  }`}
                >
                  Roteiros
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {children}

        <Section addClasses={[utilStyles.section, styles.expert]}>
          <div className={utilStyles.container}>
            <img
              src='/img/expert-fake.jpg'
              alt='Expert'
              className={styles.expert__img}
            />
            <Section.Title>Entre em contato com a guia</Section.Title>
            <div className={utilStyles.contentCenter}>
              <Section.Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio, incidunt dolor vel dolorem sint odio voluptatibus at
                aut nisi numquam magnam optio facilis porro excepturi
                repudiandae deleniti quidem eligendi? Eum impedit dolorum,
                assumenda atque harum aliquam aperiam omnis a incidunt.
              </Section.Paragraph>
              <div className={styles.contact}>
                <div className={styles.contact__icon}>
                  <span>&#128231;</span>
                  email@mail.com
                </div>
                <div className={styles.contact__icon}>
                  <span>&#128222;</span>
                  +55 (51) 9928-2983
                </div>
                <div className={styles.contact__icon}>
                  <span>&#x1f3a7;</span>
                  Agende uma call
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <footer className={styles.footer}></footer>
    </>
  );
}
