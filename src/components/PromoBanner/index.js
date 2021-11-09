import Image from 'next/image';

import { urlFor } from "../../sanity/imageUrl";

import styles from './banner.module.scss';

export default function PromoBanner({ testimonials }) {
  console.log(testimonials);
  return (
    <div className={styles.mosaic}>
      {testimonials.slice(0, 4).map(({ _key, asset, caption }) => (
        <figure key={_key} className={styles.mosaic__photo}>
          {/* <Image
            src={urlFor(asset).width(300).height(200).url()}
            width="200"
            height="100"
            alt={caption}
          />
          <figcaption className={styles.mosaic__caption}>
            {caption}
          </figcaption> */}
        </figure>
      ))}
    </div>
  )
}
