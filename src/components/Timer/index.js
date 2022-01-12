import useTimer from '../../utils/hooks/useTimer';
import style from './timer.module.scss';

export default function Timer({ countUntil, format }) {
  const [{ countdownTime, countdownChanged }, setCountdownTime] = useTimer(countUntil)

  // TODO usar o countdownChanged pra exibir um aviso visual quando o tempo mexer
  // perhaps https://codepen.io/Chester/pen/QPoyjN
  return (
    <p className={style.timer}>
      <img src="/img/icons/clock.png" alt="Relógio do Contador" />
      {format.map((f) => {
        let timeString;
        if (!countdownTime[f]) {
          timeString = '00';
        } else {
          timeString = String(countdownTime[f]).padStart(2, '0');
        }
        return (
          <span key={f} className={style[f]}>{timeString}</span>
        )
      })}
    </p>
  );
}


