import Section from '../Section';
import { DesktopNavigation, MobileNavigation } from '../Navigation';

import styles from './layout.module.scss';
import utilStyles from '../../styles/utils.module.scss';

export default function Layout({ children, page }) {
  return (
    <>
      <header className={styles.header}>
        <MobileNavigation page={page} />
        <DesktopNavigation page={page} />
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
