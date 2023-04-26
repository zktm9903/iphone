import { motion } from "framer-motion";
import { useRecoilState } from "recoil";
import { flashlightState } from "../../../../recoil/atom";

const Flashlight = () => {
  const [on, setOn] = useRecoilState(flashlightState);

  return (
    <motion.div
      className="flex flex-col justify-center items-center absolute left-[40px] bottom-[40px] w-[50px] h-[50px] rounded-[50%] bg-black"
      whileHover={{ scale: 1.2 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      style={{ filter: on ? "invert(100%)" : "invert(0%)" }}
      onClick={(event) => {
        event.stopPropagation();
        setOn((e) => !e);
      }}
    >
      <div className="absolute top-[10px] w-[15px] h-[3px] bg-white rounded-[1px]" />
      <div className="absolute top-[14px] w-[15px] h-[10px] bg-white rounded-[1px] rounded-b-[20px]" />
      <div className="absolute top-[14px] w-[8px] h-[27px] bg-white rounded-b-[1px]" />
      <div className="absolute top-[25px] w-[3px] h-[6px] bg-black rounded-[1px]" />
      <div className="absolute top-[28px] w-[2px] h-[2.5px] bg-white rounded-[1px]" />
    </motion.div>
  );
};

export default Flashlight;
