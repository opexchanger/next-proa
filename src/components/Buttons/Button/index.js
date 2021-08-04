import styles from './button.module.scss';

export default function Button({ type, children, ...restProps }) {
  return (
    <button
      className={`
          ${styles.button} 
          ${styles.noFlickr}
          ${type === 'cta' ? styles.buttonCta : type === 'block' ? styles.buttonBlock : false}
        `}
      {...restProps}
    >
      {children}
    </button>
  );
}
