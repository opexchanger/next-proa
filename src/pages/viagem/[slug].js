export default function Viagem({ viagem }) {
  return <h1>{viagem.name}</h1>;
}

export async function getStaticPaths() {
  const results = await fetch('/sanity/viagens');
  const viagens = await results.json();
  const paths = viagens.map((viagem) => ({ params: { slug: viagem.slug } }));

  return { paths };
}

export async function getStaticProps({ params }) {
  const result = await fetch(`/sanity/viagens/${params.slug}`);
  const viagem = await result.json();

  return {
    props: { viagem },
  };
}
