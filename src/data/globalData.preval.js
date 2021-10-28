import preval from 'next-plugin-preval';

import { getPagesGeral, getCompanyInfo } from '../sanity/fetch';

// step 2: write an async function that fetches your data
async function getData() {
  const pagesGeral = await getPagesGeral();
  const companyInfo = await getCompanyInfo();
  return {
    pagesGeral: pagesGeral[0],
    companyInfo: companyInfo[0]
  };
}

// step 3: export default and wrap with `preval()`
export default preval(getData());
