import { useEffect, useRef, useState } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const intervalRef = useRef(0);
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);
  const startTimer = () => {
    if (!timerRunning) {
      setTimerRunning(true);
      intervalRef.current = setInterval(() => {
        console.log("interval : " + time);
        return setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(intervalRef.current);
      setTimerRunning(false);
    }
  };
  const stopInterval = () => {
    clearInterval(intervalRef.current);
    setTimerRunning(false);
    setTime(0);
  };
  const hours = Math.floor(time / 3600000);
  const minutes = Math.floor((time % 3600000) / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = Math.floor((time % 1000) / 10);
  return (
    <div className="justify-center m-4 p-4 h-96 w-6/12 bg-gray-100 rounded-lg border border-black">
      <h1 className="text-center font-bold">Stop Watch</h1>
      <div>
        <div className="justify-center text-center flex m-2 p-2 font-bold">
          <div className="m-2 p-2">
            <h1>
              {String(hours).padStart(2, "0")} :
              {String(minutes).padStart(2, "0")} :
              {String(seconds).padStart(2, "0")} :
              {String(milliseconds).padStart(2, "0")}
            </h1>
          </div>
        </div>
        <div className="justify-center text-center flex m-5 p-5">
          <button
            className="m-2 p-2 w-20 rounded-lg bg-green-500"
            onClick={() => {
              startTimer();
            }}
          >
            {!timerRunning ? (time === 0 ? "Start" : "Restart") : "Pause"}
          </button>
          <button
            className="m-2 p-2 w-20 rounded-lg bg-red-500"
            onClick={() => stopInterval()}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default StopWatch;
