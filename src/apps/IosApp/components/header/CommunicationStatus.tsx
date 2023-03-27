import { useEffect, useState } from "react";

const Spacer = () => <div className="w-[2px]" />;

const CommunicationStatus = () => {
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    setAmount(Math.floor(Math.random() * 99 + 25));
  }, []);

  return (
    <div className="flex justify-center items-end h-[12px]">
      <div
        className={`h-[25%] w-[3px] ${
          amount >= 25 ? "bg-white" : "bg-gray-400"
        }`}
      />
      <Spacer />
      <div
        className={`h-[50%] w-[3px] ${
          amount >= 50 ? "bg-white" : "bg-gray-400"
        }`}
      />
      <Spacer />
      <div
        className={`h-[75%] w-[3px] ${
          amount >= 75 ? "bg-white" : "bg-gray-400"
        }`}
      />
      <Spacer />
      <div
        className={`h-[100%] w-[3px] ${
          amount >= 90 ? "bg-white" : "bg-gray-400"
        }`}
      />
    </div>
  );
};

export default CommunicationStatus;
