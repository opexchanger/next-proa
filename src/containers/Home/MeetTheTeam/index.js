import Section from '../../../components/Section';

import styles from './team.module.scss';
import utilStyles from '../../../styles/utils.module.scss';

export default function MeetTheTeam() {

  return (
    <Section addClasses={[styles.team]}>
      <div className={utilStyles.container}>
        <Section.Title left>Conheça a nossa equipe</Section.Title>
        <div className={styles.team__grid}>
          <div className={styles.team__employee}>
            <img src='/img/employee-1.jpg' alt="Foto do funcionário"
              className={styles.employee__picture}
            />
            <h2 className={styles.employee__name}>Nome do funcionário</h2>
            <p className={styles.employee__function}>Função</p>
          </div>
          <div className={styles.team__employee}>
            <img src='/img/employee-2.jpg' alt="Foto do funcionário"
              className={styles.employee__picture}
            />
            <h2 className={styles.employee__name}>Nome do funcionário</h2>
            <p className={styles.employee__function}>Função</p>
          </div>
          <div className={styles.team__employee}>
            <img src='/img/employee-3.jpg' alt="Foto do funcionário"
              className={styles.employee__picture}
            />
            <h2 className={styles.employee__name}>Nome do funcionário</h2>
            <p className={styles.employee__function}>Função</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
