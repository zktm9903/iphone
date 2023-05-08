import { motion } from "framer-motion";
import Conversations from "./Conversations";
import Header from "./Header";

const MessageApp = () => {
  return (
    <motion.div
      initial={{ scale: 0.5, y: 60 }}
      animate={{ scale: 1, y: 0 }}
      transition={{
        ease: "linear",
        duration: 0.3,
      }}
      className="w-full h-full bg-black rounded-[50px] flex flex-col relative"
    >
      <Header />
      <Conversations />
    </motion.div>
  );
};
export default MessageApp;
