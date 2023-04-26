import { motion } from "framer-motion";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { onPasswordScreenState } from "../../../../recoil/atom";

interface PwViewProps {
  pw: string;
}
interface PwButtonsProps {
  setPw: React.Dispatch<React.SetStateAction<string>>;
}
interface CancelBtn extends PwViewProps, PwButtonsProps {}

const PwView = ({ pw }: PwViewProps) => {
  return (
    <div className="absolute top-[100px] z-[100] flex flex-col justify-center items-center text-white h-[100px] w-[100px]">
      <p className="text-lg mb-2">암호 입력</p>
      <div className="flex">
        {[0, 1, 2, 3].map((el, idx) => (
          <p key={idx} className="text-sm mx-2">
            {pw.length > idx ? "●" : "○"}
          </p>
        ))}
      </div>
    </div>
  );
};

const PwButtons = ({ setPw }: PwButtonsProps) => {
  const numAndEn = [
    [1, "   "],
    [2, "ABC"],
    [3, "DEF"],
    [4, "GHI"],
    [5, "JKL"],
    [6, "MNO"],
    [7, "PQRS"],
    [8, "TUV"],
    [9, "WXYZ"],
    [0, "   "],
  ];

  return (
    <div className="absolute top-[230px] z-[100] flex flex-wrap justify-center items-center h-[300px] w-[270px]">
      {numAndEn.map((cha, idx) => (
        <div
          key={idx}
          onClick={() => setPw((e) => e + cha[0])}
          className="bg-[rgba(96,96,96,0.5)] relative flex flex-col justify-center items-center text-white m-2 w-[67px] h-[67px] rounded-[50%] hover:bg-[rgba(255,255,255,0.3)]"
        >
          <p
            className="absolute top-[10px] text-3xl"
            style={{ top: idx === 9 ? "14px" : "10px" }}
          >
            {cha[0]}
          </p>
          <p className="absolute top-[42px] text-[10px] tracking-[2px]">
            {cha[1]}
          </p>
        </div>
      ))}
    </div>
  );
};

//setPasswordScreen(false) 이게 안먹는지 확인이 필요함, 왜안돼@@@
const CancelBtn = ({ pw, setPw }: CancelBtn) => {
  const setPasswordScreen = useSetRecoilState(onPasswordScreenState);
  return (
    <>
      {pw.length === 0 ? (
        <p
          className="absolute right-[66px] bottom-[40px] text-white text-sm cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            setPasswordScreen(false);
          }}
        >
          취소
        </p>
      ) : (
        <p
          className="absolute right-[66px] bottom-[40px] text-white text-sm cursor-pointer"
          onClick={() => setPw((e) => e.slice(0, e.length - 1))}
        >
          삭제
        </p>
      )}
    </>
  );
};

const PasswordScreen = () => {
  const [pw, setPw] = useState("");
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      className="h-full w-full relative flex justify-center rounded-[50px] z-10 bg-[rgba(0,0,0,0.5)]"
    >
      <PwView pw={pw} />
      <PwButtons setPw={setPw} />
      <CancelBtn pw={pw} setPw={setPw} />
    </motion.div>
  );
};

export default PasswordScreen;
