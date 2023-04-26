import { useEffect, useState } from "react";

const Carrier = () => {
  const [carrier, setCarrier] = useState("KT");
  const carriers = ["KT", "SK", "LG"];

  useEffect(() => {
    setCarrier(carriers[Math.floor(Math.random() * 3)]);
  }, []);

  return <p className="text-sm font-semibold text-white">{carrier}</p>;
};

export default Carrier;
