import moment from "moment";
import { useEffect, useState } from "react";

const Time = () => {
  const [time, setTime] = useState(moment().format("H:mm"));

  useEffect(() => {
    setInterval(() => {
      setTime(moment().format("H:mm"));
    }, 1000);
  }, []);

  return <p className="text-sm font-semibold text-white">KT</p>;
};

export default Time;
