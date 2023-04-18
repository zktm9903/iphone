interface ShootBtnProps {
  capture: () => void;
  setFlicker: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShootBtn = ({ capture, setFlicker }: ShootBtnProps) => {
  const delayCapture = () => {
    setFlicker(true);
    setTimeout(() => {
      setFlicker(false);
    }, 500);
    setTimeout(() => {
      capture();
    }, 1000);
  };

  return (
    <div
      className="flex justify-center items-center absolute bottom-[80px] w-[60px] h-[60px] bg-white rounded-[50%]"
      onClick={delayCapture}
    >
      <div
        className="w-[55px] h-[55px] bg-white rounded-[50%] border-[2px] border-black"
        style={{ borderWidth: "4px" }}
      />
    </div>
  );
};

export default ShootBtn;
