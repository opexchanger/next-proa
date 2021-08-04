import Head from 'next/head';
import { format, intervalToDuration } from 'date-fns';

import Layout from '../../components/Layout';
import Hero from '../../components/Viagem/Hero';
import BuyModal from '../../components/Viagem/BuyModal';
import TravelBadges from '../../components/Viagem/TravelBadges';
import TravelContent from '../../components/Viagem/TravelContent';

import ModalProvider from '../../context/modalContext';
import { getOneTravel } from '../../sanity/fetch';

import styles from './viagem.module.scss';

export default function Viagem({ viagem }) {

  const {
    title,
    coverImage,
    regionName,
    subRegionName,
    content,
  } = viagem;

  return (
    <ModalProvider>
      <Layout>
        <Head>
          <title>{title} | Proa Viagens</title>
        </Head>

        <Hero coverImage={coverImage} title={title} regionName={regionName} subRegionName={subRegionName} />

        <BuyModal />

        <section className={styles.destino__body}>
          <div className={styles.container}>

            <TravelBadges travel={viagem} />

            <TravelContent content={content} />

          </div>
        </section>

      </Layout>

    </ModalProvider>
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
