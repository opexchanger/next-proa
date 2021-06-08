import styles from './select-options.module.scss';

export default function SelectOptions({
  options,
  selected,
  handleClick,
  primary,
  secondary,
  ...restProps
}) {
  return (
    <ul
      className={`${styles.select__options} 
        ${primary ? styles.primary : ''} ${secondary ? styles.secondary : ''}
        `}
      {...restProps}
    >
      {options.map((option) => {
        const { id, name, count } = option;

        return (
          <li key={id} className={styles.select__item} onClick={() => handleClick(option)}>
            <p className={`${styles.select__link} ${id === selected ? styles.active : ''}`}>
              {name} <span>{count}</span>
            </p>
          </li>
        );
      })}
    </ul>
  );
}
