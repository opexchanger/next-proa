import Button from '../../Button';
import Section from '../../Section';

import styles from './experiences.module.scss';
import utilStyles from '../../../styles/utils.module.scss';
import Blocks from '../../BlocksGrid';
import BlocksGrid from '../../BlocksGrid';

import blocks from '../../../data/blocks';

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
            <Button to="/" block>
              Clique para saber mais
            </Button>
          </div>
        </div>
        <BlocksGrid blocks={blocks} />
      </div>
    </Section>
  );
}
