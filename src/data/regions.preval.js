import preval from 'next-plugin-preval';

import { getRegions } from '../sanity/fetch';

// step 2: write an async function that fetches your data
async function getData() {
  const regions = await getRegions();
  return regions;
}

// step 3: export default and wrap with `preval()`
export default preval(getData());
