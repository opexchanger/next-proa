import { Field } from 'formik';

import styles from '../form.module.scss';

export default function TextArea({ name, ...restProps }) {

  return (
    <Field as="textarea" name={name} {...restProps}
      className={styles.field} >
    </Field>
  )
}