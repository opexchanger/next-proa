export default async (req, res) => {
  if (!req?.query?.secret) {
    return res.status(401).json({ message: 'No token' })
  }
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS

  // TODO no local nao ta acessando o env, em prod tem que setar
  // if (req.query.secret !== process.env.SANITY_PREVIEW_SECRET) {
  if (req.query.secret !== '1234') {
    return res.status(401).json({ message: 'Invalid token' })
  }

  if (!req.query.slug) {
    return res.status(401).json({ message: 'No slug' })
  }

  // Fetch the headless CMS to check if the provided `slug` exists
  // getPostBySlug would implement the required fetching logic to the headless CMS
  // const post = await getPostBySlug(req.query.slug)

  // If the slug doesn't exist prevent preview mode from being enabled
  // if (!post) {
  //   return res.status(401).json({ message: 'Invalid slug' })
  // }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({})

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities

  // TODO algum redirecionamento dinamico caso queiramos habilitar para outras paginas futuramente
  res.writeHead(307, { Location: `/` })

  return res.end()
}