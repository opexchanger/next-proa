import Image from 'next/image';
import BlockContent from '@sanity/block-content-to-react';

import Section from '../../components/Section';
import { DesktopNavigation, MobileNavigation } from '../../components/Navigation';

import globalData from '../../data/globalData.preval';
import { urlFor } from '../../sanity/imageUrl';

import styles from './layout.module.scss';
import utilStyles from '../../styles/utils.module.scss';

export default function Layout({ children, page }) {
  const {
    contactTitle,
    contactImage,
    contactText,
  } = globalData.pagesGeral;

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
            <div className={styles.expert__img}>
              <Image
                src={urlFor(contactImage).width(250).height(250).url()}
                width="250" height="250"
              ></Image>
            </div>
            <Section.Title>{contactTitle}</Section.Title>
            <div className={utilStyles.contentCenter}>
              <Section.Paragraph>
                <BlockContent blocks={contactText} />
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
