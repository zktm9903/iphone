import MessageAppIcon from "../appIcon/MessageAppIcon";
import { motion } from "framer-motion";

const UpperAppBox = () => {
  return (
    <motion.div
      initial={{ scale: 1.5, y: 110 }}
      animate={{ scale: 1, y: 0 }}
      className="absolute top-[50px] w-[300px] h-[550px] flex flex-wrap content-start"
    >
      <MessageAppIcon />
      <MessageAppIcon />
      <MessageAppIcon />
      <MessageAppIcon />
      <MessageAppIcon />
    </motion.div>
  );
};
const UnderAppBox = () => {
  return (
    <motion.div
      initial={{ y: 110 }}
      animate={{ y: 0 }}
      className="absolute bottom-[15px] w-[300px] h-[70px] rounded-[20px] bg-[rgba(0,0,0,0.7)] flex flex-wrap justify-center items-center"
    >
      <MessageAppIcon />
      <MessageAppIcon />
      <MessageAppIcon />
      <MessageAppIcon />
    </motion.div>
  );
};

const MainScreen = () => {
  return (
    <div className="h-full relative flex justify-center">
      <UpperAppBox />
      <UnderAppBox />
    </div>
  );
};

export default MainScreen;
