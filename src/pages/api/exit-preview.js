export default function exit(req, res) {
  res.clearPreviewData()

  // TODO parece que nao ta funcionando mt bem, fica num loading eterno

  res.writeHead(307, { Location: `/` })
}