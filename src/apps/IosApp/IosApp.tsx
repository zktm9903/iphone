import { useRecoilValue } from "recoil";
import { onPasswordScreenState } from "../../recoil/atom";
import LockScreen from "./components/ios/LockScreen";

const IosApp = () => {
  const onPwScreen = useRecoilValue(onPasswordScreenState);
  const imageURL =
    "https://images.unsplash.com/photo-1546349851-64285be8e9fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80";
  return (
    <div
      className="w-full h-full rounded-[50px]"
      style={{
        backgroundImage: `url(${imageURL})`,
        backgroundSize: "cover",
        filter: "blur(0px)",
      }}
    >
      <LockScreen />
    </div>
  );
};

export default IosApp;
