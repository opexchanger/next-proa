import BlockContent from '@sanity/block-content-to-react';

import Section from '../../../components/Section';

import styles from './about.module.scss';
import utilStyles from '../../../styles/utils.module.scss';

export default function About({ data }) {
  const {
    aboutTitle,
    aboutText,
    aboutVideoUrl
  } = data;

  return (
    <Section addClasses={[styles.about]}>
      <div className={utilStyles.container}>
        <Section.Title>{aboutTitle}</Section.Title>
        <div className={utilStyles.contentCenter}>
          <Section.Paragraph>
            <BlockContent blocks={aboutText} />
          </Section.Paragraph>
        </div>
        {/* // TODO colocar video de vdd aq */}
        <img src="img/video-fake.jpg" alt="Difference" className={styles.about__media} />
      </div>
    </Section>
  );
}
