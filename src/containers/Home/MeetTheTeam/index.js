import BlockContent from '@sanity/block-content-to-react';

import Section from '../../../components/Section';
import { urlFor } from '../../../sanity/imageUrl';

import styles from './team.module.scss';
import utilStyles from '../../../styles/utils.module.scss';

export default function MeetTheTeam({ data }) {
  const { teamTitle, teamText, employees } = data;

  return (
    <Section addClasses={[styles.team]}>
      <div className={utilStyles.container}>
        <Section.Title left>{teamTitle}</Section.Title>
        <div className={styles.divisor}>
          <div className={styles.divisor__right}>
            <Section.Paragraph>
              <BlockContent blocks={teamText} />
            </Section.Paragraph>
          </div>
          <div className={styles.divisor__left}>
            <div className={styles.team__grid}>
              {employees.map(({ _key, name, position, photo }) => (
                <div className={styles.team__employee} key={_key}>
                  <img src={urlFor(photo).width(600).height(400).url()} alt="Foto do funcionário"
                    className={styles.employee__picture}
                  />
                  <h2 className={styles.employee__name}>{name}</h2>
                  <p className={styles.employee__function}>{position}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
