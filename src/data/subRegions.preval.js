import preval from 'next-plugin-preval';

import { getSubRegions } from '../sanity/fetch';

// step 2: write an async function that fetches your data
async function getData() {
  const subRegions = await getSubRegions();
  return subRegions;
}

// step 3: export default and wrap with `preval()`
export default preval(getData());
