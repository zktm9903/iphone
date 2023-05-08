import { BsPencilSquare } from "react-icons/bs";

const Header = () => {
  return (
    <header className="w-full bg-[rgba(0,0,0,0.7)] rounded-t-[50px]">
      <div className="flex justify-between items-center pt-[45px] mx-[20px] text-blue-500">
        <p className="hover:opacity-50">편집</p>
        <p className="hover:opacity-50">
          <BsPencilSquare size={20} />
        </p>
      </div>
    </header>
  );
};

export default Header;
