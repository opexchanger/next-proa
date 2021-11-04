import styles from './button.module.scss';

export default function Button({ type, selfCenter, children, ...restProps }) {
  return (
    <button
      className={`
          ${styles.button}
          ${type === 'cta' ? styles.buttonCta : type === 'block' ? styles.buttonBlock : false}
          ${selfCenter ? styles.selfCentered : ''}
        `}
      {...restProps}
    >
      {children}
    </button>
  );
}
