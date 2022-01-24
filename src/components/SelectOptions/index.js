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
        const { id, title, travelsCount } = option;

        return (
          <li
            key={id}
            className={styles.select__item}
          >
            <p
              onClick={() => handleClick(option)}
              className={`${styles.select__link} ${id === selected ? styles.active : ''
                }`}
            >
              {title} <span>{travelsCount}</span>
            </p>
          </li>
        );
      })}
    </ul>
  );
}
