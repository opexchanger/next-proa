import Head from 'next/head'

import '../styles/globals.scss';

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
