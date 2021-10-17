import Head from 'next/head'

import '../styles/globals.scss';
// import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

import SelectionProvider from '../context/selectionContext';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      </Head>
      <SelectionProvider>
        <Component {...pageProps} />
      </SelectionProvider>
    </>
  );
}

export default App;
