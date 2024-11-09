const BonusHeader = () => {
  return (
    <header className="flex w-full flex justify-between">
      <h1 className="text-[25px] leading-[24.15px] w-1/2 max-xsmall:text-[18px]">
        Promo code and bonuses{" "}
      </h1>
      <div className="bg-[#E7FF2B] flex items-center h-max rounded-[28px] px-[10px]">
        <h3 className="text-[#37C100]">100K</h3>
        <img src="./images/cash.png" alt="cash" className="w-[32px] h-[32px]" />
      </div>
    </header>
  );
};

export default BonusHeader;
