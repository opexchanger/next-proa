import preval from 'next-plugin-preval';

import { getAllTravels } from '../sanity/fetch';

// step 2: write an async function that fetches your data
async function getData() {
  const travels = await getAllTravels();
  return travels;
}

// step 3: export default and wrap with `preval()`
export default preval(getData());
