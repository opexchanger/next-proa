import styles from './button-submit.module.scss';

export default function ButtonSubmit({ type, children, ...restProps }) {
  return (
    <button
      className={`
        ${styles.btn}
        ${type === 'whats' ? styles.btnWhatsapp : type === 'email' ? styles.btnEmail : false}
      `}
      {...restProps}
    >
      {children}
    </button>
  )
}