import { Formik, Form, Field, ErrorMessage } from 'formik';

import { getFormSchema, handleNewsletterSignIn, getReturnMessage, getInitialValues } from './utils';

import styles from './form.module.scss';

export default function NewsletterForm({ fields, groupId, messages }) {
  return (
    <Formik
      initialValues={getInitialValues(fields)}
      validationSchema={getFormSchema(fields)}
      onSubmit={async (values, formikBag) => await handleNewsletterSignIn(values, groupId, formikBag)}
    >
      {({ isValid, dirty, isSubmitting, status, setStatus, resetForm }) => (
        !status ? (
          <Form className={styles.form}>
            {fields.name && (
              <>
                <Field name="name" placeholder="Seu nome"
                  className={`${styles.input} ${styles.inputHalf}`} />
                <ErrorMessage name="name" component="div" required
                  className={styles.inputError} />
              </>
            )}
            <Field name="email" placeholder="Seu email"
              className={`${styles.input} ${fields.name ? styles.inputHalf : ''}`} />
            <ErrorMessage name="email" component="div" required
              className={styles.inputError} />

            <button type="submit" disabled={!isValid || !dirty || isSubmitting}
              className={styles.submit}
            >
              {isSubmitting ? 'Enviando...' : messages.button}
            </button>
          </Form>
        ) : (
          getReturnMessage(status, messages, () => {
            setStatus('');
            resetForm();
          })
        )
      )}
    </Formik>
  )
}