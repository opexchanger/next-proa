import { Formik, Form } from 'formik';

import formSchema from './formSchema';
import { InputField, SelectField, TextArea, ButtonSubmit, ErrorDisplay, Label } from '../../../components/Form/ContactForm';
import handleFormSubmit from '../../../utils/viagem/handleFormSubmit';
import SpinLoader from '../../../components/Loaders/SpinLoader';

import styles from './buy-form.module.scss';

export default function BuyForm({ travel, data }) {
  const {
    subjects,
    btnEmailText,
    btnWhatsappText
  } = data;

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        travel: travel.title,
        subject: subjects[0]._key,
        people: '1',
      }}
      validationSchema={formSchema}
      onSubmit={async (values, { setStatus }) => await handleFormSubmit(values, subjects, setStatus)}
    >
      {({ isValid, dirty, isSubmitting, status }) => (

        !status ?
          <Form className={`${styles.form} ${isSubmitting ? styles.submitting : ''}`}>
            <ErrorDisplay name="firstName" required />
            <ErrorDisplay name="lastName" />
            <ErrorDisplay name="email" required />

            <InputField name="firstName" placeholder="Seu primeiro nome" half />
            <InputField name="lastName" placeholder="Seu sobrenome" half />
            <InputField name="email" placeholder="Seu email" />

            <Label htmlFor="travel">Destino que está interessado</Label>
            <InputField name="travel" disabled />

            <Label htmlFor="subject">Qual o assunto principal?</Label>
            <SelectField id="subject" name="subject">
              {subjects.map(({ _key, text }) => (
                <option key={_key} value={_key}>{text}</option>
              ))}
            </SelectField>

            <Label htmlFor="people">Quantas pessoas iriam na viagem?</Label>
            <SelectField id="people" name="people">
              <option value="1" defaultValue>1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="3+">Mais de 3</option>
            </SelectField>

            <TextArea name="message" placeholder="Sua Mensagem" cols={20} rows={8} />

            <ButtonSubmit type="submit" data-flag="action-email" disabled={!isValid || !dirty} mode="email">
              {btnEmailText}
            </ButtonSubmit>

            <ButtonSubmit type="submit" data-flag="action-whatsapp" disabled={!isValid || !dirty} mode="whatsapp">
              {btnWhatsappText}
            </ButtonSubmit>
            {isSubmitting && <SpinLoader />}
          </Form>
          :
          (<div className={`${styles.form__result} ${status.result === 'success' ? styles.success : styles.fail}`} dangerouslySetInnerHTML={{ __html: status.html }} >
          </div>)
      )
      }
    </Formik >
  );
}
