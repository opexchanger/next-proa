import preval from 'next-plugin-preval';

import { getCustomRegions } from '../sanity/fetch';

// step 2: write an async function that fetches your data
async function getData() {
  const customRegions = await getCustomRegions();
  return customRegions;
}

// step 3: export default and wrap with `preval()`
export default preval(getData());
