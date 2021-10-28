import { getAllPosts } from '../../sanity/blog/fetch';
import { urlFor } from '../../sanity/imageUrl'

import Card from '../../components/Card';
import Feed from '../../containers/Blog/Feed';

export const getServerSideProps = async () => {
  const blogPosts = await getAllPosts();

  return {
    props: {
      blogPosts,
    },
  };
};

export default function Blog({ blogPosts }) {
  let content;
  if (blogPosts && blogPosts.length) {
    content = (
      <Feed>
        {blogPosts.map((post) => (
          <li key={post?.slug}>
            <Card
              title={post?.title}
              imageUrl={urlFor(post?.coverImage).width(400).height(200).url()}
              description={post?.description}
              date={post?.date}
              slug={post?.slug}
            />
          </li>
        ))}
      </Feed>
    );
  } else {
    content = <h2>Nenhuma postagem ainda! Volte em breve que teremos atualizações!</h2>
  }
  return content;
}
