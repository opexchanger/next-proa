import Image from 'next/image';

import { urlFor } from "../../sanity/imageUrl";

import styles from './mosaic.module.scss';

export default function Mosaic({ images }) {
  return (
    <div className={styles.mosaic}>
      {images.slice(0, 3).map(({ _key, asset, caption }) => (
        <figure key={_key} className={styles.mosaic__photo}>
          <Image
            src={urlFor(asset).width(357).height(237).url()}
            width="300"
            height="200"
            alt={caption}
          />
          <figcaption className={styles.mosaic__caption}>
            {caption}
          </figcaption>
        </figure>
      ))}
    </div>
  )
}
