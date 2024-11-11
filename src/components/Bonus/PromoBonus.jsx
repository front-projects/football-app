const PromoBonus = () => {
  return (
    <div className="mt-[30px] w-full grid grid-cols-2 gap-[18px] text-center max-xsmall:mt-[20px]">
      <div className="relative border-[3px] border-[#E7FF2B] rounded-[28px] px-[30px] pt-[20px] max-xsmall:pt-[10px] pb-[26px] bg-[#FFFFFF66]">
        <h1 className="text-[#E7FF2B] text-[25px] max-xsmall:text-[18px]">
          +3 USD
        </h1>
        <p className="text-[11px] text-[#E7FF2B]">Promo code activation</p>
        <div className="bg-[#FFFFFF66] w-full rounded-[28px] mt-[11px] py-[10px] text-[11px] flex items-center justify-center">
          <input className="w-[40px]" maxLength={4} placeholder="- - - -" />
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 py-2 bg-[#E7FF2B] text-[#37C100] rounded-[28px] w-max px-[20px] text-[11px]">
          Get a bonus
        </div>
      </div>
      <div className="relative border-[3px] border-[#007ED2] rounded-[28px] px-[10px] pt-[20px] max-xsmall:pt-[10px] pb-[26px] bg-[#FFFFFF] flex flex-col items-center">
        <h1 className="text-[#E7FF2B] text-[25px] max-xsmall:text-[18px]">
          +3 USD
        </h1>
        <p className="text-[11px] text-[#007ED2]">
          Subscribe to telegram and get +5 USD
        </p>
        <div className="bg-[#007ED2] w-full rounded-[28px] mt-[11px] text-[11px] py-[10px] w-max px-[16px]">
          Subscribe
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 py-2 bg-[#E7FF2B] text-[#37C100] rounded-[28px] w-max px-[20px] text-[11px]">
          Get a bonus
        </div>
      </div>
    </div>
  );
};

export default PromoBonus;
