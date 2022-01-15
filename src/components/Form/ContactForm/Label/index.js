import styles from './label.module.scss';

export default function Label({ htmlFor, children, ...restProps }) {
  return (
    <label htmlFor={htmlFor} {...restProps}
      className={styles.label}>
      {children}
    </label>
  )
}