import styles from './section.module.scss';

export default function Section({ children, addClasses, ...restProps }) {
  return (
    <section className={`${styles.section} ${addClasses ? addClasses.join(' ') : ''}`} {...restProps}>
      {children}
    </section>
  );
}

Section.Title = function ({ children, ...restProps }) {
  return (
    <h2 className={styles.title} {...restProps}>
      {children}
    </h2>
  );
};

Section.Subtitle = function ({ children, ...restProps }) {
  return (
    <h3 className={styles.subtitle} {...restProps}>
      {children}
    </h3>
  );
};

Section.Paragraph = function ({ children, ...restProps }) {
  return (
    <p className={styles.paragraph} {...restProps}>
      {children}
    </p>
  );
};
