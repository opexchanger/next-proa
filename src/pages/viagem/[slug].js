import Head from 'next/head';
import Image from 'next/image';
import BlockContent from '@sanity/block-content-to-react';
import { useNextSanityImage } from 'next-sanity-image';

import Layout from '../../components/Layout';
import DesktopNavigation from '../../components/DesktopNavigation';
import Button from '../../components/Button';

import client from '../../sanity/client';
import { getAllTravels, getOneTravel } from '../../sanity/fetch';
import { imageSeralizer } from '../../sanity/serializers';

import styles from './viagem.module.scss';
import utilStyles from '../../styles/utils.module.scss';
import Link from 'next/link';

export default function Viagem({ viagem }) {
  const { title, coverImage, regionName, subRegionName, content } = viagem;
  const imageProps = useNextSanityImage(client, coverImage);

  return (
    <Layout>
      <Head>
        <title>{title} | Proa Viagens</title>
      </Head>

      <header className={styles.header}>
        <DesktopNavigation />
        <Link href='/destinos'>
          <a className={[utilStyles.link, styles.header__back].join(' ')}>
            Voltar
          </a>
        </Link>
        <Image
          src={imageProps.src}
          loader={imageProps.loader}
          layout='fill'
          objectFit='cover'
          objectPosition='center'
        ></Image>
        <div className={styles.header__title}>
          <h1>{title}</h1>
          <h3>
            {regionName} - {subRegionName}
          </h3>
          <Button to='/' cta>
            Faça essa viagem
          </Button>
        </div>
      </header>

      <section className={styles.destino__body}>
        <div className={styles.container}>
          <h2 className={styles.destino__title}>Sobre a experiência</h2>
          <BlockContent
            className={styles.content}
            blocks={content}
            serializers={imageSeralizer}
          />
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticPaths() {
  const viagens = await getAllTravels();
  const paths = viagens.map((viagem) => ({ params: { slug: viagem.slug } }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const result = await getOneTravel(params.slug);
  const viagem = result[0];

  return {
    props: { viagem },
  };
}
