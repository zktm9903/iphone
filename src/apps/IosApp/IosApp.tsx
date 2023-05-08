import { useRecoilValue } from "recoil";
import { needPwState } from "../../recoil/atom";
import LockScreen from "./components/ios/LockScreen";
import MainScreen from "./components/ios/MainScreen";

const IosApp = () => {
  const needPw = useRecoilValue(needPwState);

  return (
    <div className="w-full h-full rounded-[50px]">
      {needPw && <LockScreen />}
      {needPw || <MainScreen />}
    </div>
  );
};

export default IosApp;
