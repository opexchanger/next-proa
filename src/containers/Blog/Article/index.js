import BlockContent from '@sanity/block-content-to-react';

import FormattedDate from '../../../components/Date';
import { urlFor } from '../../../sanity/imageUrl';

import styles from './article.module.scss';

const serializers = {
  types: {
    image: ({ node: { asset, caption } }) => (
      <figure>
        <img src={urlFor(asset).width(720).url()} alt={caption} />
        <figcaption>{caption}</figcaption>
      </figure>
    ),
  },
};

export default function Article(props) {
  const {
    title,
    date,
    description,
    authorName,
    authorAvatarUrl,
    coverImageUrl,
    content,
  } = props;
  return (
    <article className={styles.container}>
      <div className={styles.limiter}>
        <div className={styles.head}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div className={styles.authorSnippet}>
          <div className={styles.avatar}>
            <img src={authorAvatarUrl || '/img/no-avatar.png'} alt={authorName} />
          </div>
          <div>
            <span>{authorName}, </span>
            <FormattedDate>{date}</FormattedDate>
          </div>
        </div>
        <div className={styles.coverImage}>
          <img src={coverImageUrl} alt={title} />
        </div>
        <BlockContent
          className={styles.blockContent}
          blocks={content}
          serializers={serializers}
        />
      </div>
    </article>
  );
}
