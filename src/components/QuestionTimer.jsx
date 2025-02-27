import { useEffect, useState } from "react";

export default function QuestionTimer({ timeOut, onTimeOut }) {
  const [remainingTime, setRemainingTime] = useState(timeOut);

  useEffect(() => {
    setTimeout(onTimeOut, timeOut);
  }, [timeOut, onTimeOut]);

  useEffect(() => {
    setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);
  }, []);

  return <progress max={timeOut} value={remainingTime} />;
}
