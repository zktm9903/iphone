import { useEffect, useState } from "react";
import moment from "moment";
import "moment/dist/locale/ko";

const DateTime = () => {
  const [date, setDate] = useState(moment().format("MMMM Do dddd"));
  const [time, setTime] = useState(moment().format("H:mm"));

  useEffect(() => {
    setInterval(() => {
      setDate(moment().format("MMMM Do dddd"));
      setTime(moment().format("H:mm"));
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center absolute top-[11%] w-[200px] h-[100px]">
      <p className="text-white text-lg">{date}</p>
      <p className="text-white text-7xl font-semibold">{time}</p>
    </div>
  );
};

export default DateTime;
