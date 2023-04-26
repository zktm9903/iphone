import { motion } from "framer-motion";
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col justify-center items-center absolute top-[11%] w-[200px] h-[100px]"
    >
      <p className="text-white text-lg">{date}</p>
      <p className="text-white text-7xl font-semibold">{time}</p>
    </motion.div>
  );
};

export default DateTime;
