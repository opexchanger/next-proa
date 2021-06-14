import Head from 'next/head';
import Image from 'next/image';
import BlockContent from '@sanity/block-content-to-react';
import { format, intervalToDuration } from 'date-fns';

import Layout from '../../components/Layout';
import DesktopNavigation from '../../components/DesktopNavigation';
import Button from '../../components/Button';
import Badge from '../../components/Badge';

import { getAllTravels, getOneTravel } from '../../sanity/fetch';
import { urlFor } from '../../sanity/imageUrl';
import { imageSeralizer } from '../../sanity/serializers';

import styles from './viagem.module.scss';

export default function Viagem({ viagem }) {
  const {
    title,
    coverImage,
    regionName,
    subRegionName,
    content,
    departureDate,
    duration,
    hasAereo,
    hasChildFree,
    childFree,
    hasCortesy,
    cortesy,
    hasBlock,
    price,
    installments,
  } = viagem;

  return (
    <Layout>
      <Head>
        <title>{title} | Proa Viagens</title>
      </Head>

      <header className={styles.header}>
        <DesktopNavigation />
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
          <Button to='/' cta>
            Faça essa viagem
          </Button>
        </div>
      </header>

      <section className={styles.destino__body}>
        <div className={styles.container}>
          <div className={styles.infos}>
            <Badge span={departureDate} text={<h4>{duration} dias</h4>} />
            {hasAereo && (
              <Badge
                icon
                span={<img src='/img/icons/plane.png' />}
                text={<p>Com aéreo</p>}
              />
            )}
            {hasChildFree && (
              <Badge
                icon
                span={<img src='/img/icons/child.png' />}
                text={
                  <p style={{ fontSize: '1.5rem' }}>
                    {childFree.quantity} CHD FREE até {childFree.age} anos
                  </p>
                }
              />
            )}
            {hasCortesy && (
              <Badge
                icon
                span={<img src='/img/icons/coconut.png' />}
                text={
                  <>
                    <h5>Cortesia</h5>
                    <p style={{ fontSize: '1.5rem' }}>{cortesy}</p>
                  </>
                }
              />
            )}
            {hasBlock && (
              <Badge
                icon
                span={<img src='/img/icons/lock.png' />}
                text={<h5>Bloqueio</h5>}
              />
            )}
            <div className={styles.price}>
              <h5>A partir de</h5>
              <h2 className={styles.priceTag}>
                <span>R$</span>
                {price}
              </h2>
              <h5>
                Em até <span>{installments}x</span>
              </h5>
            </div>
          </div>
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

export async function getServerSideProps({ params }) {
  const result = await getOneTravel(params.slug);
  const viagem = result[0];

  viagem.duration = intervalToDuration({
    start: new Date(viagem.departureDate),
    end: new Date(viagem.returnDate),
  }).days;
  viagem.departureDate = format(new Date(viagem.departureDate), 'dd/MM');
  viagem.returnDate = format(new Date(viagem.returnDate), 'dd/MM');

  console.log(viagem);

  return {
    props: {
      viagem,
    },
  };
}

// export async function getStaticPaths() {
//   const viagens = await getAllTravels();
//   const paths = viagens.map((viagem) => ({ params: { slug: viagem.slug } }));

//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   const result = await getOneTravel(params.slug);
//   const viagem = result[0];

//   return {
//     props: {
//       viagem,
//     },
//   };
// }
