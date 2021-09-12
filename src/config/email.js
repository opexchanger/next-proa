export const smtp = {
  user: process.env.SMTP_USER,
  pass: process.env.SMTP_PASS,
}

export const mailMessage = {
  from: 'contact@impactinglifestyle.com',
  to: 'contato@proaviagens.com.br',
  replyTo: '',
  subject: '',
  text: '',
  html: '',
};