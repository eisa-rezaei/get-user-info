import { useEffect, useState } from "react";

const Timer = ({ setIsZero }) => {
  const [time, setTime] = useState(15);
  useEffect(() => {
    setTimeout(() => {
      if (time > 0) {
        setTime(time - 1);
      } else {
      }
    }, 1000);
    if (time === 0) setIsZero(true);
  }, [time, setIsZero]);

  return <>{time}s</>;
};

export default Timer;
