import { useState } from "react";
import DailyBonusItem from "./DailyBonusItem";

const DailyBonus = () => {
  const [locked, setLocked] = useState(true);

  return (
    <div className="grid grid-cols-4 relative bg-[#E7FF2B] rounded-[28px] mt-[40px] max-xsmall:mt-[20px]  pt-[15px] pb-[30px] max-xsmall:pb-[15px]">
      <div className="absolute left-1/2 -translate-x-1/2 -top-2 bg-[#FFFFFF] text-[#37C100] rounded-[28px] w-max px-[20px] text-[11px]">
        Pick up a bonus every 24 hours
      </div>
      <DailyBonusItem price={1} />
      <DailyBonusItem price={2} />
      <DailyBonusItem price={3} locked />
      <DailyBonusItem price={4} locked />
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 py-2 bg-[#FFFFFF] text-[#37C100] rounded-[28px] w-max px-[20px] text-[11px]">
        {locked ? (
          <span className="text-[#1E1E1E80]">24:00</span>
        ) : (
          "Get a bonus"
        )}
      </div>
    </div>
  );
};

export default DailyBonus;
