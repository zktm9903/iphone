import CommonIconBox from "./CommonIconBox";

const MessageAppIcon = () => (
  <CommonIconBox bgColor="#58BD49" appUrl={"/message"}>
    <div className="absolute bg-white rounded-[50%] w-[40px] h-[30px]" />
    <div
      style={{
        position: "relative",
        bottom: "-10px",
        left: "-5px",
        width: "0px",
        height: "0px",
        borderRight: "20px solid white",
        borderTop: "10px solid transparent",
        borderBottom: "1px solid transparent",
        msTransform: "rotate(340deg)",
        WebkitTransform: "rotate(340deg)",
        transform: "rotate(340deg)",
      }}
    />
  </CommonIconBox>
);

export default MessageAppIcon;
