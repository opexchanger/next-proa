import { urlFor } from '../../../sanity/imageUrl';
import { getAllPosts, getPostBySlug } from '../../../sanity/blog/fetch';

import Article from '../../../containers/Blog/Article';

export async function getStaticPaths() {
  const posts = await getAllPosts();
  const paths = posts.map((viagem) => ({ params: { slug: viagem.slug } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  let { slug } = params;
  if (slug instanceof Array) slug = slug[0];

  const blogPost = await getPostBySlug(slug);

  return {
    props: {
      blogPost,
    },
  };
}

export default function Post({ blogPost }) {
  const { title, description, author, date, coverImage, content } = blogPost;
  return (
    <Article
      title={title}
      description={description}
      authorName={author.name}
      authorAvatarUrl={urlFor(author.avatar).width(40).url()}
      coverImageUrl={urlFor(coverImage).width(720).url()}
      date={date}
      content={content}
    />
  );
}
