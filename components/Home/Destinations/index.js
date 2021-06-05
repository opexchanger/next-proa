import Section from '../../Section';
import Block from '../../Block';
import Button from '../../Button';

import styles from './destinations.module.scss';
import utilStyles from '../../../styles/utils.module.scss';

const destinations = [
  {
    id: 1,
    title: 'Europa',
    cover: 'europe.jpg',
  },
  {
    id: 2,
    title: 'América do Sul',
    cover: 'south-america.jpg',
  },
  {
    id: 3,
    title: 'América do Norte',
    cover: 'north-america.jpg',
  },
];

export default function Destinations() {
  return (
    <Section addClasses={[styles.destinations]}>
      <div className={[utilStyles.container, styles.destinations__container].join(' ')}>
        <div className={styles.destinations__map}>
          <img src="img/world-map.svg" alt="Map" />
        </div>
        <div>
          <Section.Title style={{ textAlign: 'left' }}>Nossos destinos</Section.Title>
          <p className={styles.destinations__text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus nemo
            voluptate corrupti.
          </p>

          {destinations.map(({ id, title, cover }) => (
            <Block key={id} title={title} cover={cover} />
          ))}

          <Button to="/destinos" style={{ marginTop: '2rem' }}>
            Veja todos os destinos
          </Button>
        </div>
      </div>
    </Section>
  );
}
