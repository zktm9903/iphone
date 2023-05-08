import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

interface CommonIconBox {
  children: ReactNode;
  bgColor: string;
  appUrl: string;
}

const CommonIconBox = ({ children, bgColor, appUrl }: CommonIconBox) => {
  const navigate = useNavigate();
  return (
    <motion.div
      whileHover={{ scale: 1.15 }}
      className="w-[50px] h-[50px] flex justify-center items-center bg-white rounded-[7px] m-[12.5px]"
      style={{ backgroundColor: bgColor }}
      onClick={() =>
        setTimeout(() => {
          navigate(appUrl);
        }, 300)
      }
    >
      {children}
    </motion.div>
  );
};

export default CommonIconBox;
