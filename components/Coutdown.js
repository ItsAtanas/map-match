import { useState, useEffect } from "react";

const getFutureDate = (days) => {
  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + days);
  futureDate.setHours(23, 59, 59, 999);
  return futureDate;
};

const Countdown = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const target = getFutureDate(count);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

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
