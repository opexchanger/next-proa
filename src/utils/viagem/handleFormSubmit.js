import { mailMessage } from '../../config/email';
import { whatsappLink } from "../../config/whatsapp";
import { mountEmailMessage, mountWhatsappMessage } from './messagesHelpers';
import { mailSuccess, mailFail, whatsappSuccess, whatsappFail } from './messagesTemplates';

export default async function handleFormSubmit(values, subjectsReference, setStatus) {
  if (document.activeElement.dataset.flag === 'action-email') {
    mountEmailMessage(mailMessage, values, subjectsReference);

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
              result: 'success', html: mailSuccess
            });
          } else {
            console.log(result);
            setStatus({
              result: 'fail', html: mailFail
            });
          }
        })
        .catch((error) => {
          console.log(error);
          setStatus({
            result: 'fail', html: mailFail
          });
        })
    })
  }

  if (document.activeElement.dataset.flag === 'action-whatsapp') {
    const openWhatsapp = mountWhatsappMessage(whatsappLink, values, subjectsReference);
    window.open(openWhatsapp, '_blank');
    setStatus({
      result: 'success', html: whatsappSuccess
    });
  }
}