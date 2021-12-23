import Head from 'next/head';
import { format, intervalToDuration } from 'date-fns';

import Layout from '../../containers/Layout';
import Hero from '../../containers/Viagem/Hero';
import BuyModal from '../../containers/Viagem/BuyModal';
import TravelBadges from '../../containers/Viagem/TravelBadges';
import TravelContent from '../../containers/Viagem/TravelContent';
import Gallery from '../../components/Gallery';
import CTAButton from '../../containers/Viagem/CTAViagem';
import ExitPreview from '../../components/ExitPreview';

import ModalProvider from '../../context/modalContext';
import { getAllTravels, getOneTravel } from '../../sanity/fetch';
import { usePreviewSubscription, filterDataToSingleItem } from '../../sanity/previewHelpers';

import styles from './viagem.module.scss';

export async function getStaticPaths() {
  const viagens = await getAllTravels();
  const paths = viagens.map((viagem) => ({ params: { slug: viagem.slug } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, preview = false }) {
  const { travelResult, query } = await getOneTravel(params.slug, preview);

  if (!travelResult) return { notFound: true }

  const travel = filterDataToSingleItem(travelResult, preview);

  travel.duration = intervalToDuration({
    start: new Date(travel.departureDate),
    end: new Date(travel.returnDate),
  }).days;
  travel.departureDate = format(new Date(travel.departureDate), 'dd/MM');
  travel.returnDate = format(new Date(travel.returnDate), 'dd/MM');

  return {
    props: {
      preview,
      data: { travel, query, params },
    },
  };
}

export default function Viagem({ data, preview }) {
  console.log('preview :>> ', preview);
  const { data: previewData } = usePreviewSubscription(data?.query, {
    params: data?.params ?? {},
    // The hook will return this on first render
    // This is why it's important to fetch *draft* content server-side!
    initialData: data?.travel,
    // The passed-down preview context determines whether this function does anything
    enabled: preview,
  })

  const viagem = filterDataToSingleItem(previewData, preview);

  // gotta parse the data again when it's being previewed
  if (preview) {
    viagem.duration = intervalToDuration({
      start: new Date(viagem.departureDate),
      end: new Date(viagem.returnDate),
    }).days;
    viagem.departureDate = format(new Date(viagem.departureDate), 'dd/MM');
    viagem.returnDate = format(new Date(viagem.returnDate), 'dd/MM');
  }

  const {
    title,
    coverImage,
    regionName,
    subRegionName,
    content,
    gallery
  } = { ...viagem };

  return (
    <ModalProvider>
      <Layout>
        <Head>
          <title>{title} | Proa Viagens</title>
        </Head>

        {/* TODO trocar o botão CTA nessa página pra rosa com azul */}

        <Hero coverImage={coverImage} title={title} regionName={regionName} subRegionName={subRegionName} />

        <BuyModal travel={viagem} />

        <section className={styles.destino__body}>
          <div className={styles.container}>

            <TravelBadges travel={viagem} />

            <TravelContent content={content} />

            <Gallery images={gallery} />

            <CTAButton selfCenter>Faça essa viagem</CTAButton>

          </div>
        </section>

      </Layout>

      {preview &&
        <ExitPreview />
      }
    </ModalProvider>
  );
}


// export async function getServerSideProps({ params }) {
//   const result = await getOneTravel(params.slug);
//   const viagem = result[0];

//   viagem.duration = intervalToDuration({
//     start: new Date(viagem.departureDate),
//     end: new Date(viagem.returnDate),
//   }).days;
//   viagem.departureDate = format(new Date(viagem.departureDate), 'dd/MM');
//   viagem.returnDate = format(new Date(viagem.returnDate), 'dd/MM');

//   return {
//     props: {
//       viagem,
//     },
//   };
// }