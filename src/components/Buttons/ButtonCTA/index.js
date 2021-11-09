import styles from './button.module.scss';

export default function ButtonCTA({ selfCenter, children, ...restProps }) {
  return (
    <button
      className={`
        ${styles.button}
        ${selfCenter ? styles.selfCentered : ''}
      `}
      {...restProps}
    >
      {children}
    </button>
  );
}
