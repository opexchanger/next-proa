export default async (req, res) => {
  if (!req?.query?.secret) {
    return res.status(401).json({ message: 'No token' })
  }
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS

  // No local nao ta acessando o env
  if (req.headers.host.startsWith('localhost')) {
    if (req.query.secret !== '1234') {
      return res.status(401).json({ message: 'Invalid token in dev mode' })
    }
  } else {
    if (req.query.secret !== process.env.SANITY_PREVIEW_SECRET) {
      return res.status(401).json({ message: 'Invalid token' })
    }
  }

  if (req.query.directory && !req.query.slug) {
    return res.status(401).json({ message: 'Directory without slug' })
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({})

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities

  res.writeHead(307, { Location: `${req?.query?.directory || ''}/${req?.query?.slug}` ?? `/` })

  return res.end()
}