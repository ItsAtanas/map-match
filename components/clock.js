import { useState, useEffect } from "react";

const Clock = () => {
  const [reset, setReset] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  let data = "04/29/2023 23:59:59";

  useEffect(() => {
    const target = new Date(data);

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
        setReset(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {reset ? (
        <p className="text-white mt-3">Rest Me</p>
      ) : (
        <p className="text-white mt-3 text-3xl">
          New Maps in: {hours}:{minutes}:{seconds}
        </p>
      )}
    </>
  );
};

export default Clock;
