import { urlFor } from './imageUrl';

export const imageSeralizer = {
  types: {
    image: ({ node: { asset, caption } }) => (
      <figure>
        <img src={urlFor(asset).width(720).url()} alt={caption} />
        <figcaption>{caption}</figcaption>
      </figure>
    ),
  },
};
