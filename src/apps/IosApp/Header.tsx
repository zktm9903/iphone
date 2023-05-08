import { useRecoilValue } from "recoil";
import { needCarrierState } from "../../recoil/atom";
import {
  Bandwidth,
  Battery,
  Carrier,
  CommunicationStatus,
  Time,
} from "./components/header";

const Spacer = () => <div className="w-[5px]" />;

const Header = () => {
  const needCarrier = useRecoilValue(needCarrierState);
  return (
    <div className="h-[30px] w-[300px] absolute top-[16px] z-[20]">
      <div className="flex justify-center items-center absolute w-[100px] h-[30px] left-0">
        {needCarrier ? <Carrier /> : <Time />}
      </div>
      <div className="flex justify-center items-center absolute w-[100px] h-[30px] right-0">
        <CommunicationStatus />
        <Spacer />
        <Bandwidth />
        <Spacer />
        <Battery />
      </div>
    </div>
  );
};

export default Header;
