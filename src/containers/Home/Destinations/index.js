import BlockContent from '@sanity/block-content-to-react';

import Section from '../../../components/Section';
import Block from '../../../components/Block';
import { ButtonLink } from '../../../components/Buttons';

import styles from './destinations.module.scss';
import utilStyles from '../../../styles/utils.module.scss';

import regions from '../../../data/regions.preval';
import { useSelection } from '../../../context/selectionContext';
import { urlFor } from '../../../sanity/imageUrl';

export default function Destinations({ data }) {
  const { setSelectedRegion } = useSelection();

  const {
    destinationsTitle,
    destinationsText,
    destinationsButtonText,
  } = data;

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
            {destinationsTitle}
          </Section.Title>
          <p className={styles.destinations__text}>
            <BlockContent blocks={destinationsText} />
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
            {destinationsButtonText}
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
