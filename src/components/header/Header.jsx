export const Header = () => {
  return (
    <div className="header flex flex-col justify-center items-center gap-[15px]">
      <img src="https://via.placeholder.com/68x45" alt="onco" />

      <div className="text-[10px] tracking-[3.80px]">
        Ask me anything on health
      </div>

      <div className="flex justify-center items-center w-[97px] h-[33px] p-[10px] rounded-3xl bg-[#52a3cf] text-[#fff] text-[12px]">
        GPT
      </div>
    </div>
  );
};
