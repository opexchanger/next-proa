import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: '2021-06-01',
  useCdn: false,
});
