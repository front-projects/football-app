const UsdInput = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="bg-[#FFFFFF66] w-full rounded-[28px] text-[20px] flex">
        <input
          type="text"
          className="rounded-[28px] py-[22px] pl-[20px]"
          placeholder="Enter an amount"
        />
        <div className="bg-white rounded-[28px] text-[#37C100] flex items-center justify-center w-full">
          MAX
        </div>
      </div>
      <p className="text-[14px] pl-[30px] py-2">Your Banas 100,000 USD</p>
      <div className="w-full grid grid-cols-3 gap-2 text-[20px]">
        <div className="border-[3px] border-white rounded-[28px] py-[16px] text-center">
          25%
        </div>
        <div className="border-[3px] border-white rounded-[28px] py-[16px] text-center">
          50%
        </div>
        <div className="border-[3px] border-white rounded-[28px] py-[16px] text-center">
          75%
        </div>
      </div>
      <div className="bg-[#FFFFFF66] w-full rounded-[28px] text-[20px] flex mt-6">
        <input
          type="text"
          className="rounded-[28px] py-[22px] pl-[20px]"
          placeholder="Enter an amount"
          value={100000}
          readOnly
        />
        <div className="bg-white rounded-[28px] text-[#37C100] flex items-center justify-center w-full">
          USDT
        </div>
      </div>
      <button className="text-[#37C100] bg-[#E7FF2B] text-[30px] rounded-[28px] py-[27px] mt-[20px]">
        Withdraw{" "}
      </button>
      <p className="text-[#FFFFFF] text-[11px] text-center px-[30px] mt-6">
        Make sure that the data is entered correctly, in case of an error the
        funds may be lost forever
      </p>
    </div>
  );
};

export default UsdInput;
