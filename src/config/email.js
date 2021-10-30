export const smtp = {
  user: process.env.SMTP_USER,
  pass: process.env.SMTP_PASS,
}

export const mailMessage = {
  from: process.env.SENDER_EMAIL,
  to: process.env.RECEIVER_EMAIL,
  replyTo: '',
  subject: '',
  text: '',
  html: '',
};