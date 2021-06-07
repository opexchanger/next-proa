import Block from '../Block';

import styles from './blocks-grid.module.scss';

export default function BlocksGrid({ blocks }) {
  return (
    <div className={styles.blocks}>
      {blocks.map(({ id, coverUrl, iconUrl, title }) => (
        <Block key={id} cover={coverUrl} icon={iconUrl} title={title} />
      ))}
    </div>
  );
}
