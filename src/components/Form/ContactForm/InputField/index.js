import { Field } from 'formik';

import styles from '../form.module.scss';

export default function InputField({ name, placeholder, required, half, ...restProps }) {

  return (
    <Field name={name} placeholder={placeholder} {...restProps}
      className={`${styles.field} ${half ? styles.fieldHalf : ''}`} />
  )
}