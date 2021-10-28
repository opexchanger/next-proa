import Image from 'next/image'

import { urlFor } from '../../sanity/imageUrl';
import Slider from '../Slider';

import styles from './gallery.module.scss';

export default function Gallery({ images }) {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Na Proa de:</h2>
      <p className={styles.text}>Algumas das pessoas que fizeram essa viagem!</p>
      {images && (
        <Slider perView={3} space={10} pagination={{ clickable: true }} centered navigation>
          {images.map((image) => (
            <Image key={image._key} src={urlFor(image).width(300).height(200).url()} width="300" height="200" />
          ))}
        </Slider>
      )}
    </section>
  );
}

