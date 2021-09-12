import { mailMessage } from '../../config/email';
import { whatsappLink } from "../../config/whatsapp";
import { mountEmailMessage, mountWhatsappMessage } from './helpers';
import { mailSuccess, mailFail, whatsappSuccess } from './messagesTemplates';

export default async function handleFormSubmit(values, setStatus) {
  if (document.activeElement.dataset.flag === 'action-email') {
    mountEmailMessage(mailMessage, values);

    return new Promise((res, rej) => {
      fetch('/api/email', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(mailMessage)
      })
        .then((result) => {
          if (result.status === 200) {
            setStatus({
              result: 'email-success', html: mailSuccess
            });
          } else {
            console.log(result);
            setStatus({
              result: 'email-fail', html: mailFail
            });
          }
        })
        .catch((error) => {
          console.log(error);
          setStatus({
            result: 'email-fail', html: mailFail
          });
        })
    })
  }

  if (document.activeElement.dataset.flag === 'action-whatsapp') {
    const openWhatsapp = mountWhatsappMessage(whatsappLink, values);
    window.open(openWhatsapp, '_blank');
    setStatus({
      result: 'whatsapp-success', html: whatsappSuccess
    });
  }
}