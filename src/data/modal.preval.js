import preval from 'next-plugin-preval';

import { getModal } from '../sanity/fetch';

// step 2: write an async function that fetches your data
async function getData() {
  const modal = await getModal();
  return modal[0];
}

// step 3: export default and wrap with `preval()`
export default preval(getData());
