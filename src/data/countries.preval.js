import preval from 'next-plugin-preval';

import { getAllCountries } from '../sanity/fetch';

// step 2: write an async function that fetches your data
async function getData() {
  const countries = await getAllCountries();
  return countries;
}

// step 3: export default and wrap with `preval()`
export default preval(getData());
