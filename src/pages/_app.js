import '../styles/globals.scss';

import SelectionProvider from '../context/selectionContext';

function App({ Component, pageProps }) {
  return (
    <SelectionProvider>
      <Component {...pageProps} />
    </SelectionProvider>
  );
}

export default App;
