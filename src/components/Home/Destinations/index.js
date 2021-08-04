import Section from '../../Section';
import Block from '../../Block';
import { ButtonLink } from '../../Buttons';

import styles from './destinations.module.scss';
import utilStyles from '../../../styles/utils.module.scss';

import regions from '../../../data/regions.preval';
import { useSelection } from '../../../context/selectionContext';
import { urlFor } from '../../../sanity/imageUrl';

export default function Destinations() {
  const { setSelectedRegion } = useSelection();

  return (
    <Section addClasses={[styles.destinations]}>
      <div
        className={[utilStyles.container, styles.destinations__container].join(
          ' '
        )}
      >
        <div className={styles.destinations__map}>
          <img src='img/world-map.svg' alt='Map' />
        </div>
        <div>
          <Section.Title style={{ textAlign: 'left' }}>
            Nossos destinos
          </Section.Title>
          <p className={styles.destinations__text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus nemo voluptate corrupti.
          </p>

          {regions.map((region) => {
            const { id, name, coverImage } = region;

            return (
              <Block
                key={id}
                title={name}
                cover={urlFor(coverImage).width(550).height(200).url()}
                link='/destinos'
                handleClick={() => setSelectedRegion(region)}
              />
            );
          })}

          <ButtonLink to='/destinos' style={{ marginTop: '2rem' }}>
            Veja todos os destinos
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
