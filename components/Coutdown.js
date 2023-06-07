import { useState, useEffect } from "react";
import { format, utcToZonedTime, addDays } from "date-fns-tz";

const Countdown = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [count, setCount] = useState(0);

  const getETDate = (days) => {
    const today = new Date();
    const date = addDays(today, days);
    date.setHours(23, 59, 59, 999);
    const format = 'yyyy-MM-dd HH:mm:ss.SSS'
    const ET = 'America/New_York';
    const zonedDate = utcToZonedTime(date, ET)
    return zonedDate;
  };

  useEffect(() => {
    const target = getETDate(count);

    const interval = setInterval(() => {
      const nowInET = utcToZonedTime(new Date(), 'America/New_York');
      const difference = target.getTime() - nowInET.getTime();

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (h <= 0 && m <= 0 && s <= 0) {
        setCount(count + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <>
      <p className="text-white mt-3 text-3xl">
        New Maps in: {hours}:{minutes}:{seconds}
      </p>
    </>
  );
};

export default Countdown;
