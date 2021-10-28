import { parseISO, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './date.module.scss';

export default function FormattedDate({ children }) {
  const date = parseISO(children);

  return (
    <time dateTime={children} className={styles.date}>
      {format(date, `d 'de' MMMM 'de' yyyy`, { locale: ptBR })}
    </time>
  );
}
