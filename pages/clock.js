import { useState, useEffect } from "react";

export const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: time.toLocaleTimeString("en-US"),
      }}
    />
  );
};
