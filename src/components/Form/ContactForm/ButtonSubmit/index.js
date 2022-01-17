import styles from './button-submit.module.scss';

export default function ButtonSubmit({ mode, children, ...restProps }) {
  return (
    <button
      className={`
        ${styles.btn}
        ${mode === 'whatsapp' ? styles.btnWhatsapp : mode === 'email' ? styles.btnEmail : false}
      `}
      {...restProps}
    >
      {children}
    </button>
  )
}