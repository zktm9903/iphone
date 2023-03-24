import { ReactNode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Header, MessageApp } from "./apps";
import router from "./router";

interface BoardProps {
  children: ReactNode;
}

const Board = ({ children }: BoardProps) => (
  <div className="flex justify-center items-center h-[750px] w-[350px] relative bg-black rounded-[60px] border-solid border-[3px] border-zinc-700">
    {children}
  </div>
);

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
  <div className="h-[30px] w-[100px] bg-black absolute top-[16px] rounded-[60px]" />
);

const Display = ({ children }: BoardProps) => (
  <div className="h-[725px] w-[325px] rounded-[50px]">{children}</div>
);

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
          <RouterProvider router={router} />
        </Display>
      </Board>
    </div>
  );
};

export default Iphone;
