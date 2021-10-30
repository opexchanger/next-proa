export const getAssunto = (subjectKey, subjectsReference) => {
  const referencedSubject = subjectsReference.find((subject) => subject._key == subjectKey);
  return referencedSubject.text;
}

// TODO tem algum jeito da subjectsReference ficar "registrada" na getAssunto? por closure?

export const mountEmailMessage = (mailMessage, values, subjectsReference) => {
  const { firstName, lastName, email, travel, subject, people, message } = values;
  mailMessage.subject = `Contato pelo formulário do site! "${getAssunto(subject, subjectsReference)}"`;
  mailMessage.replyTo = email;
  mailMessage.html = `
    <p><strong>Nome completo:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Destino com interesse:</strong> ${travel}</p>
    <p><strong>Assunto:</strong> "${getAssunto(subject, subjectsReference)}"</p>
    <p><strong>Número de pessoas para a viagem:</strong> ${people}</p>
    <p><strong>Mensagem:</strong></p>
    <p>${message || 'Não preenchida pelo usuário.'}</p>
  `;
  mailMessage.text = `Nome completo: ${firstName} ${lastName}
    Email: ${email}
    Destino com interesse: ${travel}
    Assunto: "${getAssunto(subject, subjectsReference)}"
    Número de pessoas para a viagem: ${people}
    Mensagem: ${message || 'Não preenchida pelo usuário.'}
  `
}

export const mountWhatsappMessage = (whatsappLink, values, subjectsReference) => {
  const { firstName, lastName, email, travel, subject, people, message } = values;

  // formatação é relevante
  const whatsappMessage =
    `Olá, sou ${firstName} ${lastName} e ${getAssunto(subject, subjectsReference).toLowerCase()} referente ao destino ${travel}.

Meu email é ${email} e a viagem seria para ${people} pessoa(s).

${message ? `Minha mensagem adicional: ${message}` : ''}


_Mensagem gerada diretamente pelo website._`;

  return `${whatsappLink}${encodeURIComponent(whatsappMessage)}`;
}