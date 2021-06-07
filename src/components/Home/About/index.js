import Section from '../../Section';

import styles from './about.module.scss';
import utilStyles from '../../../styles/utils.module.scss';

export default function About() {
  return (
    <Section addClasses={[styles.about]}>
      <div className={utilStyles.container}>
        <Section.Title>Lorem ipsum dolor sit.</Section.Title>
        <div className={utilStyles.contentCenter}>
          <Section.Paragraph>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et debitis accusantium,
            doloribus reiciendis nostrum velit id nesciunt. Dignissimos earum illum ea quam
            obcaecati aliquid odio hic explicabo, ad accusamus a laboriosam quos voluptates
            distinctio odit molestias? Officia commodi nulla officiis?
          </Section.Paragraph>
        </div>
        <img src="img/video-fake.jpg" alt="Difference" className={styles.about__media} />
      </div>
    </Section>
  );
}
