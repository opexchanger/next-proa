import BlockContent from '@sanity/block-content-to-react';

import Section from '../../../components/Section';
import { ButtonLink } from '../../../components/Buttons';

import styles from './experiences.module.scss';
import utilStyles from '../../../styles/utils.module.scss';
import Mosaic from '../../../components/Mosaic';
// import BlocksGrid from '../../../components/BlocksGrid';

export default function Experiences({ data }) {
  const {
    presentationTitle,
    presentationSubtitle,
    mosaic,
    experiencesTitle,
    experiencesText,
    experiencesButtonText
  } = data;

  return (
    <Section addClasses={[styles.experience]}>
      <div className={utilStyles.container}>
        <Section.Title>{presentationTitle}</Section.Title>
        <Section.Subtitle>{presentationSubtitle}</Section.Subtitle>
        <div className={styles.call}>
          <div className={styles.call__left}>
            <Mosaic images={mosaic} />
          </div>
          <div className={styles.call__right}>
            <div className={styles.call__text}>
              <h3 className={styles.call__text__title}>{experiencesTitle}</h3>
              <p className={styles.call__text__description}>
                <BlockContent blocks={experiencesText} />
              </p>
            </div>
            <ButtonLink to="/" type='block' style={{ whiteSpace: "nowrap" }}>
              {experiencesButtonText}
            </ButtonLink>
          </div>
        </div>
        {/* // TODO selecionar os blocos que vem pra cá */}
        {/* <BlocksGrid blocks={blocks} /> */}
      </div>
    </Section>
  );
}
