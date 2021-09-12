import transporter from '../../config/nodemailer';

export default async function handler(req, res) {
  const message = req.body;

  try {
    const mailSent = await transporter.sendMail(message);
    console.log(mailSent);
    res.status(200).end();
  } catch (error) {
    console.log('Solicitação Nodemailer não completada: >>>>>>');
    console.log(error);
    res.status(500).end();
  }

}