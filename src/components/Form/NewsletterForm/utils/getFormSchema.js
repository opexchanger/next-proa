import * as Yup from 'yup';

const emailValidation = Yup.string()
  .email("Ops, parece ter algum problema com o formato do seu e-mail")
  .required("O email precisa estar preenchido");

const nameValidation = Yup.string()
  .min(2, "Nome muito curto! Use pelo menos 2 caracteres")
  .max(20, "Nome muito longo! Deixe no máximo 20 caracteres")
  .required("Não esqueça do seu nome");

export default function getFormSchema(fields) {
  if (!fields.name) {
    return Yup.object().shape({
      email: emailValidation
    })
  }

  return Yup.object().shape({
    email: emailValidation,
    name: nameValidation,
  })
}