export const getAssuntoMail = (subject) => {
  switch (subject) {
    case 'estimate':
      return 'orçamento';
    case 'information':
      return 'informação';
    default:
      break;
  }
}

export const mountEmailMessage = (mailMessage, values) => {
  const { firstName, lastName, email, travel, subject, people, message } = values;
  mailMessage.subject = `Contato pelo formulário do site! Solicitação de ${getAssuntoMail(subject)}`;
  mailMessage.replyTo = email;
  mailMessage.html = `
    <p><strong>Nome completo:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Destino com interesse:</strong> ${travel}</p>
    <p><strong>Assunto:</strong> Solicitação de ${getAssuntoMail(subject)}</p>
    <p><strong>Número de pessoas para a viagem:</strong> ${people}</p>
    <p><strong>Mensagem:</strong></p>
    <p>${message || 'Não preenchida pelo usuário.'}</p>
  `;
  mailMessage.text = `Nome completo: ${firstName} ${lastName}
    Email: ${email}
    Destino com interesse: ${travel}
    Assunto: Solicitação de ${getAssuntoMail(subject)}
    Número de pessoas para a viagem: ${people}
    Mensagem: ${message || 'Não preenchida pelo usuário.'}
  `
}

export const getAssuntoWhatsapp = (subject) => {
  switch (subject) {
    case 'estimate':
      return 'um orçamento para';
    case 'information':
      return 'fazer uma pergunta sobre';
    default:
      break;
  }
}

export const mountWhatsappMessage = (whatsappLink, values) => {
  const { firstName, lastName, email, travel, subject, people, message } = values;

  // formatação é relevante
  const whatsappMessage =
    `Olá, sou ${firstName} ${lastName} e quero ${getAssuntoWhatsapp(subject)} o destino ${travel}.

Meu email é ${email} e a viagem seria para ${people} pessoa(s).

Minha mensagem adicional: ${message || 'não preenchida.'}


_Mensagem gerada diretamente pelo website._`;

  return `${whatsappLink}${encodeURIComponent(whatsappMessage)}`;
}