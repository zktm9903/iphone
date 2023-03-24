import { useEffect, useState } from "react";

const Battery = () => {
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    setAmount(Math.floor(Math.random() * 99 + 1));
  }, []);

  return (
    <>
      <div className="flex justify-center items-center w-[22px] h-[12px] bg-transparent rounded-[4px] border border-gray-400">
        <div className="w-[18px] h-[8px]">
          <div
            className="h-[8px] rounded-[2.5px]"
            style={{
              background: `${amount < 30 ? "red" : "white"}`,
              width: `${amount + "%"}`,
            }}
          />
        </div>
      </div>
      <div className="relative left-[1px] bg-gray-400 w-[2px] h-[4px] rounded-tr-[3px] rounded-br-[3px]" />
    </>
  );
};

export default Battery;
