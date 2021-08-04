import styles from './form.module.scss';

export default function Form({ formConfig, children, ...restProps }) {
  const { handleSubmit } = formConfig;
  return (
    <form {...restProps} onSubmit={handleSubmit}>
      {children}
    </form>
  )
}

Form.Input = function ({ inputConfig, label, half, ...restProps }) {
  const { type, name, placeholder } = inputConfig;
  return (
    <>
      {label &&
        <label htmlFor={name}>{label}</label>
      }
      <input type={type} name={name} id={name} placeholder={placeholder} {...restProps}
        className={`${styles.form__input} ${half && styles.form__inputHalf}`}
      />
    </>
  )
}

Form.Select = function ({ selectConfig, label, children, ...restProps }) {
  const { name } = selectConfig;
  return (
    <>
      {label &&
        <label htmlFor={name}>{label}</label>
      }
      <select name={name} id={name} {...restProps}
        className={[styles.form__input, styles.form__select].join(' ')}
      >
        {children}
      </select>
    </>
  )
}

Form.SelectOption = function ({ optionConfig, ...restProps }) {
  const { value, text } = optionConfig;
  return (
    <option value={value} {...restProps}>{text}</option>
  )
}

Form.TextArea = function ({ textAreaConfig, ...restProps }) {
  const { name, placeholder, cols, rows } = textAreaConfig;
  return (
    <textarea name={name} placeholder={placeholder} cols={cols} rows={rows}
      className={styles.form__input} {...restProps}
    ></textarea>
  )
}