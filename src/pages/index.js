import Home from './home';

import { getPageHome } from '../sanity/fetch';

export const getStaticProps = async () => {
  const pageHomeData = await getPageHome();

  return {
    props: {
      pageHomeData: pageHomeData[0]
    }
  }
}

function Index({ pageHomeData }) {
  return <Home data={pageHomeData} />;
}

export default Index;
