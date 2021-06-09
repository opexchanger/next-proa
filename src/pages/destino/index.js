import Head from 'next/head';
import Image from 'next/image';

import Layout from '../../components/Layout';
import DesktopNavigation from '../../components/DesktopNavigation';
import Button from '../../components/Button';

import styles from './viagem.module.scss';

import destinoData from '../../data/destino';

export default function Destino() {
  const { title, regionName, subRegionName, coverImage, content1, content2 } = destinoData;
  return (
    <Layout>
      <Head>
        <title>{title} | Proa Viagens</title>
      </Head>

      <header className={styles.header}>
        <DesktopNavigation />
        <Image
          src={`/img/${coverImage}`}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        ></Image>
        <div className={styles.header__title}>
          <h1>{title}</h1>
          <h3>
            {regionName} - {subRegionName}
          </h3>
          <Button to="/" cta>
            Faça essa viagem
          </Button>
        </div>
      </header>

      <section className={styles.destino__body}>
        <div className={styles.container}>
          <h2 className={styles.destino__title}>Sobre a experiência</h2>
          <p className={styles.destino__content}>{content1}</p>
          <p className={styles.destino__content}>{content2}</p>
        </div>
      </section>
    </Layout>
  );
}
