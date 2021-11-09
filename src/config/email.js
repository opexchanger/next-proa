export const smtp = {
  user: process.env.SMTP_USER,
  pass: process.env.SMTP_PASS,
}

export const mailMessage = {
  from: 'contact@impactinglifestyle.com',
  to: 'flavioneto96@gmail.com',
  replyTo: '',
  subject: '',
  text: '',
  html: '',
};