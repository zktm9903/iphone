import { useState } from "react";
import Camera from "./Camera";
import DateTime from "./DateTime";
import Flashlight from "./Flashlight";
import PasswordScreen from "./PasswordScreen";

const LockScreen = () => {
  const [needPW, setNeedPw] = useState(false);

  return (
    <div
      className="flex justify-center relative w-full h-full"
      onClick={() => setNeedPw(true)}
    >
      <DateTime />
      <Flashlight />
      <Camera />
      {needPW && <PasswordScreen />}
    </div>
  );
};

export default LockScreen;
