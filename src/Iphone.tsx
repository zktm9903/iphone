import { ReactNode } from "react";
import { useRecoilValue } from "recoil";
import { Header } from "./apps";
import { flashlightState } from "./recoil/atom";
import Router from "./router";

interface BoardProps {
  children: ReactNode;
}

const Board = ({ children }: BoardProps) => {
  const flashOn = useRecoilValue(flashlightState);

  return (
    <div
      className="flex justify-center items-center h-[750px] w-[350px] relative bg-black rounded-[60px] border-solid border-[3px] border-zinc-700"
      style={{
        boxShadow: flashOn
          ? "0 0px 100px rgba(255,255,0,1), 0 0px 0px rgba(255,255,0,1)"
          : "",
      }}
    >
      {children}
    </div>
  );
};

const PowerBtn = () => (
  <div className="h-[90px] w-[5px] bg-black absolute right-[-6px] top-[210px]" />
);

const SilenceBtn = () => (
  <div className="h-[30px] w-[5px] bg-black absolute left-[-6px] top-[120px]" />
);

const VolumeUpBtn = () => (
  <div className="h-[50px] w-[5px] bg-black absolute left-[-6px] top-[180px]" />
);

const VolumeDownBtn = () => (
  <div className="h-[50px] w-[5px] bg-black absolute left-[-6px] top-[240px]" />
);

const DynamicIsland = () => (
  <div className="h-[30px] w-[100px] bg-black absolute top-[16px] rounded-[60px] z-[100]" />
);

const Display = ({ children }: BoardProps) => {
  const imageURL =
    // "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcJmWkI%2Fbtr7CUzVC8c%2FhCK74VmbFUYQlEeDRUXPQK%2Fimg.jpg";
    "https://images.unsplash.com/photo-1546349851-64285be8e9fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80";
  return (
    <div
      className="h-[725px] w-[325px] rounded-[50px]"
      style={{
        backgroundImage: `url(${imageURL})`,
        backgroundSize: "cover",
        filter: "blur(0px)",
      }}
    >
      {children}
    </div>
  );
};

const Iphone = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-300">
      <Board>
        <PowerBtn />
        <SilenceBtn />
        <VolumeUpBtn />
        <VolumeDownBtn />
        <Header />
        <DynamicIsland />
        <Display>
          <Router />
        </Display>
      </Board>
    </div>
  );
};

export default Iphone;
