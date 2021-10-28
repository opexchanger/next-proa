import * as Yup from 'yup';

export default Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Nome muito curto! Use pelo menos 2 caracteres")
    .max(20, "Nome muito longo! Deixe no máximo 20 caracteres")
    .required("Não esqueça do seu nome"),
  lastName: Yup.string()
    .max(20, "Este sobrenome parece muito longo! Deixe no máximo 20 caracteres"),
  email: Yup.string()
    .email("Este e-mail não parece válido")
    .required("Informe-nos o seu belo email")
});