const Conversations = () => {
  return (
    <div className="w-full h-full rounded-b-[50px]">
      <p className="text-white ml-[20px] my-[10px] text-2xl font-bold">
        메시지
      </p>
      <input
        type="text"
        className="mx-[20px] w-[calc(100%-40px)] rounded-[5px] text-sm bg-gray-700 text-gray-400 p-1 outline-none"
      />
    </div>
  );
};

export default Conversations;
