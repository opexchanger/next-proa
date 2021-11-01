import Section from '../../../components/Section';

import styles from './feed.module.scss';
import utilStyles from '../../../styles/utils.module.scss';

export default function Feed({ children }) {
  return (
    <Section>
      <div className={utilStyles.container}>
        <ul className={styles.wrapper}>{children}</ul>
      </div>
    </Section>
  );
}
