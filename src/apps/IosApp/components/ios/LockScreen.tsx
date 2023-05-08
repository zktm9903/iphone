import { AnimatePresence } from "framer-motion";
import { useRecoilState } from "recoil";
import {
  hideTimeFlashCameraState,
  onPasswordScreenState,
} from "../../../../recoil/atom";
import Camera from "./Camera";
import DateTime from "./DateTime";
import Flashlight from "./Flashlight";
import PasswordScreen from "./PasswordScreen";

const LockScreen = () => {
  const [onPwScreen, setOnPwScreen] = useRecoilState(onPasswordScreenState);
  const [hide, setHide] = useRecoilState(hideTimeFlashCameraState);

  return (
    <div
      className="flex justify-center relative w-full h-full"
      onClick={() => {
        setHide(true);
        setOnPwScreen(true);
      }}
    >
      <AnimatePresence>{hide || <DateTime />}</AnimatePresence>
      <AnimatePresence>{hide || <Flashlight />}</AnimatePresence>
      <AnimatePresence>{hide || <Camera />}</AnimatePresence>
      <AnimatePresence>{onPwScreen && <PasswordScreen />}</AnimatePresence>
    </div>
  );
};

export default LockScreen;
