import Camera from "./Camera";
import DateTime from "./DateTime";
import Flashlight from "./Flashlight";

const LockScreen = () => {
  return (
    <div className="flex justify-center relative w-full h-full">
      <DateTime />
      <Flashlight />
      <Camera />
    </div>
  );
};

export default LockScreen;
