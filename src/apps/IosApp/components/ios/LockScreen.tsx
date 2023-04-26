import { AnimatePresence } from "framer-motion";
import { useRecoilState } from "recoil";
import { onPasswordScreenState } from "../../../../recoil/atom";
import Camera from "./Camera";
import DateTime from "./DateTime";
import Flashlight from "./Flashlight";
import PasswordScreen from "./PasswordScreen";

const LockScreen = () => {
  const [needPW, setNeedPw] = useRecoilState(onPasswordScreenState);

  return (
    <div
      className="flex justify-center relative w-full h-full"
      onClick={() => setNeedPw(true)}
    >
      <AnimatePresence>{needPW || <DateTime />}</AnimatePresence>
      <AnimatePresence>{needPW || <Flashlight />}</AnimatePresence>
      <AnimatePresence>{needPW || <Camera />}</AnimatePresence>
      <AnimatePresence>{needPW && <PasswordScreen />}</AnimatePresence>
    </div>
  );
};

export default LockScreen;
