const MailerLite = require('mailerlite-api-v2-node').default

const mailerLite = MailerLite(process.env.MAILER_LITE_API_KEY);

export default async function handler(req, res) {
  const { name, email, optionalFields, groupId } = req.body;

  const payload = {
    email: email,
    ...(name && { name }),
    ...(optionalFields && { optionalFields })
  }

  try {
    const result = await mailerLite.addSubscriberToGroup(groupId, payload);
    res.status(200).end();
  } catch (error) {
    console.log('Solicitação MailerLite não completada: >>>>>>');
    console.log(error);
    res.status(500).end();
  }
}