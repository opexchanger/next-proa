import Head from 'next/head';

import ModalProvider from '../../context/modalContext';

import Layout from '../../containers/Layout';
import Hero from '../../containers/Home/Hero';
import Experiences from '../../containers/Home/Experiences';
import About from '../../containers/Home/About';
import Destinations from '../../containers/Home/Destinations';
import BuyModal from '../../containers/Home/BuyModal';

export default function Home({ data }) {
  return (
    <ModalProvider>
      <Layout page='home'>
        <Head>
          <title>Proa Viagens | Página Inicial</title>
          <meta name='description' content='Proa Agência de Viagens' />
        </Head>

        <BuyModal />

        <Hero data={data} />
        <Experiences data={data} />
        <About data={data} />
        <Destinations data={data} />
      </Layout>
    </ModalProvider>
  );
}
