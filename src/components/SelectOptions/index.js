import styles from './select-options.module.scss';

export default function SelectOptions({
  options,
  withExtra,
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
      {withExtra && (
        <li
          key={withExtra.id}
          className={styles.select__item}
          onClick={() => handleClick(withExtra)}
        >
          <p
            className={`${styles.select__link} ${
              withExtra.id === selected ? styles.active : ''
            }`}
          >
            {withExtra.name} <span>{withExtra.travelsCount}</span>
          </p>
        </li>
      )}
      {options.map((option) => {
        const { id, name, travelsCount } = option;

        return (
          <li
            key={id}
            className={styles.select__item}
            onClick={() => handleClick(option)}
          >
            <p
              className={`${styles.select__link} ${
                id === selected ? styles.active : ''
              }`}
            >
              {name} <span>{travelsCount}</span>
            </p>
          </li>
        );
      })}
    </ul>
  );
}
