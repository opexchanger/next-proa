import { AnimatePresence } from 'framer-motion';

import Block from '../Block';
import { urlFor } from '../../sanity/imageUrl';

import styles from './blocks-grid.module.scss';

export default function BlocksGrid({ blocks }) {
  return (
    <AnimatePresence>
      <div className={styles.blocks}>
        {blocks.map(({ id, coverImage, iconUrl, title, slug }) => (
          <Block
            key={id}
            cover={urlFor(coverImage).width(550).height(200).url()}
            icon={iconUrl}
            title={title}
            link={`/viagem/${slug}`}
          />
        ))}
      </div>
    </AnimatePresence>
  );
}
