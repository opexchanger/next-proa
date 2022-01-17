import { Field } from 'formik';

import styles from '../form.module.scss';

export default function SelectField({ name, half, children, ...restProps }) {

  return (
    <Field as="select" name={name} {...restProps}
      className={`${styles.field} ${half ? styles.fieldHalf : ''}`} >
      {children}
    </Field>
  )
}