import client from '../client';

export const getAllPosts = async () => {
  const blogPosts = await client.fetch(`
  *[_type == 'post'] {
    'slug': slug.current,
    title,
    description,
    date,
    coverImage,
  }`);

  return blogPosts;
};

export const getPostBySlug = async (slug) => {
  const blogPost = await client
    .fetch(
      `
        *[_type == 'post' && slug.current == $slug] {
          title,
          description,
          date,
          coverImage,
          content,
          'author': author-> {
            name,
            avatar
          }
        }
      `,
      { slug }
    )
    .then((res) => res[0]);

  return blogPost;
};
