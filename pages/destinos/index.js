import Head from 'next/head';
import Link from 'next/link';
import styles from './destinos.module.scss';

import Layout from '../../components/Layout';

export default function Destinos() {
  return (
    <Layout>
      <Head>
        <title>Destinos | Proa Viagens</title>
      </Head>
      <div className={styles.destinos}>
        <h1>Página Destinos</h1>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </div>
    </Layout>
  );
}
