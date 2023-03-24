import {
  Bandwidth,
  Battery,
  CommunicationStatus,
  Time,
} from "./components/header";

const Header = () => {
  return (
    <div className="h-[30px] w-[300px] absolute top-[16px]">
      <div className="flex justify-center items-center absolute w-[100px] h-[30px] left-0">
        <Time />
      </div>
      <div className="flex justify-center items-center absolute w-[100px] h-[30px] right-0">
        <CommunicationStatus />
        <div className="w-[4px]" />
        <Bandwidth />
        <div className="w-[4px]" />
        <Battery />
      </div>
    </div>
  );
};

export default Header;
