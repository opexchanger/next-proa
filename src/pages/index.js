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

import { getPageHome } from '../sanity/fetch';

export const getStaticProps = async () => {
  const pageHomeData = await getPageHome();

  return {
    props: {
      data: pageHomeData[0]
    }
  }
}

export default function Home({ data }) {
  return (
    <ModalProvider>
      <Layout page='home'>
        <Head>
          <title>Proa Viagens | Página Inicial</title>
          <meta name='description' content='Proa Agência de Viagens' />
        </Head>

        <BuyModal />

        <Hero>
          <Header tiles={data.tiles} />
        </Hero>

        {/* TODO passar só os itens específicos x o objeto inteiro afeta quanto a performance?  */}
        <Experiences data={data} />
        <About data={data} />
        <Destinations data={data} />
        <MeetTheTeam data={data} />
      </Layout>
    </ModalProvider>
  );
}

