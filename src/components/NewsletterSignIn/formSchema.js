import * as Yup from 'yup';

export default Yup.object().shape({
  email: Yup.string()
    .email("Ops, parece ter algum problema com o formato do seu e-mail")
    .required("O email precisa estar preenchido")
});