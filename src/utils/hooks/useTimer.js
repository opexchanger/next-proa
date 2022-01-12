import { intervalToDuration } from 'date-fns';
import { useState, useEffect } from "react";

export default function useTimer(countUntil) {
  const [countdownData, setCountdownData] = useState({ countdownTime: {}, countdownChanged: false });

  useEffect(() => {
    setCountdownData((prev) => {
      return { ...prev, countdownTime: getTimeRemaining(countUntil) }
    });

    const interval = setInterval(() => {
      setCountdownData(({ countdownTime }) => {
        const newTime = getTimeRemaining(countUntil);
        const timeChanged =
          newTime.days !== countdownTime.days ||
          newTime.hours !== countdownTime.hours ||
          newTime.minutes !== countdownTime.minutes;
        return {
          countdownTime: newTime,
          countdownChanged: timeChanged
        };
      })
    }, 10000);

    return () => clearInterval(interval);
  }, [countUntil])

  return [countdownData, setCountdownData]
}


function getTimeRemaining(countUntil) {
  return intervalToDuration({
    start: new Date(Date.now()),
    end: new Date(countUntil),
  })
}