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
      {options.map(({ id, name, count }) => (
        <li
          key={`${id}-${name}`}
          className={styles.select__item}
          onClick={() => handleClick(id)}
        >
          <p className={`${styles.select__link} ${id === selected ? styles.active : ''}`}>
            {name} <span>{count}</span>
          </p>
        </li>
      ))}
    </ul>
  );
}
