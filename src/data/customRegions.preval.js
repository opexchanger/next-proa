import preval from 'next-plugin-preval';

import { getCustomRegion } from '../sanity/fetch';

// step 2: write an async function that fetches your data
async function getData() {
  const categories = await getCustomRegion();
  return categories;
}

// step 3: export default and wrap with `preval()`
export default preval(getData());
