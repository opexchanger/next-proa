import Head from 'next/head';

import ModalProvider from '../context/modalContext';

import Layout from '../components/Layout';
import Hero from '../components/Home/Hero';
import Experiences from '../components/Home/Experiences';
import About from '../components/Home/About';
import Destinations from '../components/Home/Destinations';
import BuyModal from '../components/Home/BuyModal';

export default function Home() {
  return (
    <ModalProvider>
      <Layout page='home'>
        <Head>
          <title>Proa Viagens | Página Inicial</title>
          <meta name='description' content='Proa Agência de Viagens' />
        </Head>

        <BuyModal />

        <Hero />
        <Experiences />
        <About />
        <Destinations />
      </Layout>
    </ModalProvider>
  );
}
