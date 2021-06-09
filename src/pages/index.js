import Head from 'next/head';

import Layout from '../components/Layout';
import Hero from '../components/Home/Hero';
import Experiences from '../components/Home/Experiences';
import About from '../components/Home/About';
import Destinations from '../components/Home/Destinations';

export default function Home() {
  return (
    <Layout page='home'>
      <Head>
        <title>Proa Viagens | Página Inicial</title>
        <meta name='description' content='Proa Agência de Viagens' />
      </Head>

      <Hero />
      <Experiences />
      <About />
      <Destinations />
    </Layout>
  );
}
