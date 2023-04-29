import React, { useState, useEffect } from "react";
function Helppls() {
  const [counttwo, setCounttwo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count === 10) {
        setCount(0);
      } else {
        setCount((count) => count + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [count]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounttwo((counttwo) => (counttwo === 10 ? 0 : counttwo + 1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <p className="text-white">{count}</p>
      <p className="text-white">{counttwo}</p>
    </div>
  );
}

export default Helppls;
