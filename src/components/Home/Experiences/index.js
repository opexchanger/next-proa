import Section from '../../Section';
import { ButtonLink } from '../../Buttons';

import styles from './experiences.module.scss';
import utilStyles from '../../../styles/utils.module.scss';
import BlocksGrid from '../../BlocksGrid';

export default function Hero() {
  return (
    <Section addClasses={[styles.experience]}>
      <div className={utilStyles.container}>
        <Section.Title>Lorem ipsum dolor sit</Section.Title>
        <Section.Subtitle>Consectetur adipisicing elit. Hic!</Section.Subtitle>
        <div className={styles.call}>
          <div className={styles.call__left}>
            <img
              className={utilStyles.imgFit}
              src="/img/trip-feat-bg2.jpg"
              alt="Travel pic"
            />
          </div>
          <div className={styles.call__right}>
            <div className={styles.call__text}>
              <h3 className={styles.call__text__title}>Lorem Ipsum</h3>
              <p className={styles.call__text__description}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias facere
                accusamus quod minima, impedit quidem sunt.
              </p>
            </div>
            <ButtonLink to="/" type='block'>
              Clique para saber mais
            </ButtonLink>
          </div>
        </div>
        {/* <BlocksGrid blocks={blocks} /> */}
      </div>
    </Section>
  );
}
