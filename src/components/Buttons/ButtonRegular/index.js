import styles from './button-regular.module.scss';

export default function ButtonRegular({ children, to, type, ...restProps }) {
  return (
    <button
      className={`
          ${styles.button}
        `}
      {...restProps}
    >
      {children}
    </button>
  );
}
