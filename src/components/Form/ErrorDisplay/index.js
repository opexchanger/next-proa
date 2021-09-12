import { ErrorMessage } from 'formik';

import styles from './error-display.module.scss';

export default function ErrorDisplay({ name, ...restProps }) {
  return (
    <ErrorMessage name={name} component="div" {...restProps}
      className={styles.error} />
  )
}