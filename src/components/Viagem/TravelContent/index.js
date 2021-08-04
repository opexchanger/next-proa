import BlockContent from '@sanity/block-content-to-react';

import { imageSeralizer } from '../../../sanity/serializers';

import styles from './travel-content.module.scss';

export default function TravelContent({ content }) {
  return (
    <>
      <h2 className={styles.destino__title}>Sobre a experiência</h2>
      <BlockContent
        className={styles.content}
        blocks={content}
        serializers={imageSeralizer}
      />
    </>
  )
}