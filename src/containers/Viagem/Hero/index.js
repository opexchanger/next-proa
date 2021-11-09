import Image from 'next/image';

import { urlFor } from '../../../sanity/imageUrl';
import CTAViagem from "../CTAViagem";

import styles from './hero.module.scss';

export default function Hero({ coverImage, title, regionName, subRegionName }) {
  return (
    <header className={styles.header}>
      <Image
        src={urlFor(coverImage).width(1900).height(500).url()}
        layout='fill'
        objectFit='cover'
        objectPosition='center'
      ></Image>
      <div className={styles.header__title}>
        <h1>{title}</h1>
        <h3>
          {regionName} - {subRegionName}
        </h3>
        <CTAViagem>Faça essa viagem</CTAViagem>
      </div>
    </header>
  )
}