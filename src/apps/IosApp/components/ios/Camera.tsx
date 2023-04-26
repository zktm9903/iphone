import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const Camera = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      className="flex flex-col justify-center items-center absolute right-[40px] bottom-[40px] w-[50px] h-[50px] rounded-[50%] bg-black"
      whileHover={{ scale: 1.2 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      style={{}}
      onClick={(event) => {
        event.stopPropagation();
        setTimeout(() => {
          navigate("./camera");
        }, 500);
      }}
    >
      <div className="absolute top-[14px] w-[10px] h-[5px] bg-white rounded-[1px]" />
      <div className="absolute top-[17px] w-[23px] h-[15px] bg-white rounded-[1px]" />
      <div className="absolute top-[19px] w-[10px] h-[10px] bg-white rounded-[50%] border-2 border-black" />
      <div className="absolute top-[19px] right-[17px] w-[2px] h-[2px] bg-black rounded-[50%]" />
    </motion.div>
  );
};

export default Camera;
