import { useState, useEffect } from "react";

const Countdown = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [count, setCount] = useState(0);

  const dates = [
    "05/02/2023 23:59:59",
    "05/03/2023 1:59:59",
    "05/04/2023 23:59:59",
    "05/05/2023 23:59:59",
    "05/06/2023 23:59:59",
    "05/07/2023 23:59:59",
    "05/08/2023 23:59:59",
    "05/09/2023 23:59:59",
    "05/10/2023 23:59:59",
    "05/11/2023 23:59:59",
    "05/12/2023 23:59:59",
    "05/13/2023 23:59:59",
  ];
  let data = dates[count];

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
/*
import { useState, useEffect } from "react";

const Coutdown = () => {
  const [reset, setReset] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  let data = "05/02/2023 23:59:59";

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

export default Coutdown;
*/
