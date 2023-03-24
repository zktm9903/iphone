import Time from "./components/ios/Time";

const LockScreen = () => {
  return (
    <div className="absolute w-full h-full">
      <Time />
    </div>
  );
};

const IosApp = () => {
  const imageURL =
    "https://images.unsplash.com/photo-1546349851-64285be8e9fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80";
  return (
    <div
      className="w-full h-full rounded-[50px]"
      style={{
        backgroundImage: `url(${imageURL})`,
        backgroundSize: "cover",
      }}
    ></div>
  );
};

export default IosApp;
