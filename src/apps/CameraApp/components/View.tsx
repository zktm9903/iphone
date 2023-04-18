import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

interface ViewProps {
  children: ReactNode;
  flicker: boolean;
}

const FlickerDiv = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="absolute w-full h-[243.75px] bg-black"
  />
);

const View = ({ children, flicker }: ViewProps) => {
  return (
    <div className="absolute w-full top-[200px] h-[243.75px]">
      <div className="absolute top-0 left-0 bg-transparent w-[30px] h-[30px] border-gray-400 border-l-2 border-t-2" />
      <div className="absolute top-0 right-0 bg-transparent w-[30px] h-[30px] border-gray-400 border-r-2 border-t-2" />
      <div className="absolute bottom-0 right-0 bg-transparent w-[30px] h-[30px] border-gray-400 border-r-2 border-b-2" />
      <div className="absolute bottom-0 left-0 bg-transparent w-[30px] h-[30px] border-gray-400 border-l-2 border-b-2" />
      <AnimatePresence>{flicker && <FlickerDiv />}</AnimatePresence>
      {children}
    </div>
  );
};

export default View;
