import { useEffect, useState } from "react";
import { StTimerContainer } from "./style";

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

  return (
    <StTimerContainer>
      <p>{time.toLocaleString("fa")}</p>
      <span>ثانیه</span>
    </StTimerContainer>
  );
};

export default Timer;
