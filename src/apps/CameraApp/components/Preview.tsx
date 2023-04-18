import { motion } from "framer-motion";
import { useRecoilValue } from "recoil";
import { albumState } from "../../../recoil/atom";

const Preview = () => {
  const pictures = useRecoilValue(albumState);

  if (!pictures.length) return <></>;
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="absolute top-[593px] left-5 w-[45px] h-[45px]"
    >
      <img
        src={pictures[0]}
        className="w-full h-full rounded-[3px] object-cover"
      />
    </motion.div>
  );
};

export default Preview;
