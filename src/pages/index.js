import Head from 'next/head';

import ModalProvider from '../context/modalContext';

import Layout from '../containers/Layout';
import Hero from '../components/Hero';
import Experiences from '../containers/Home/Experiences';
import About from '../containers/Home/About';
import Destinations from '../containers/Home/Destinations';
import BuyModal from '../containers/Home/BuyModal';
import Header from '../containers/Home/Header';
import MeetTheTeam from '../containers/Home/MeetTheTeam';
import NewsletterSignIn from '../components/NewsletterSignIn';
import ExitPreview from '../components/ExitPreview';

import { getPageHome } from '../sanity/fetch';
import Testimonials from '../components/Testimonials';
import { usePreviewSubscription, filterDataToSingleItem } from '../sanity/previewHelpers';

export const getStaticProps = async ({ preview = false }) => {
  const { pageHome, query } = await getPageHome(preview);

  if (!pageHome) return { notFound: true }

  const pageHomeData = filterDataToSingleItem(pageHome, preview);

  return {
    props: {
      preview,
      data: { pageHomeData, query }
    }
  }
}

export default function Home({ data, preview }) {
  const { data: previewData } = usePreviewSubscription(data?.query, {
    params: data?.queryParams ?? {},
    // The hook will return this on first render
    // This is why it's important to fetch *draft* content server-side!
    initialData: data?.pageHomeData,
    // The passed-down preview context determines whether this function does anything
    enabled: preview,
  })

  const pageData = filterDataToSingleItem(previewData, preview)

  return (
    <ModalProvider>
      <Layout page='home'>
        <Head>
          <title>Proa Viagens | Página Inicial</title>
          <meta name='description' content='Proa Agência de Viagens' />
        </Head>

        <BuyModal />

        <Hero>
          <Header tiles={pageData.tiles} />
        </Hero>

        {/* TODO passar só os itens específicos x o objeto inteiro afeta quanto a performance?  */}
        <Experiences data={pageData} />
        <About data={pageData} />
        <Destinations data={pageData} />
        <MeetTheTeam data={pageData} />
        <Testimonials data={pageData} />
        <NewsletterSignIn data={pageData} />
      </Layout>

      {preview &&
        <ExitPreview />
      }
    </ModalProvider>
  );
}

