import { useEffect, useState } from "react";

const Bandwidth = () => {
  const [status, setStatus] = useState("LTE");
  const LTEor5G = ["LTE", "5G"];

  useEffect(() => {
    setStatus(LTEor5G[Math.floor(Math.random() * 2)]);
  }, []);
  return <p className="text-sm font-semibold text-white">{status}</p>;
};

export default Bandwidth;
