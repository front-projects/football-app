import { useState } from "react";
import { useSelector } from "react-redux";

const UsdInput = () => {
  const balance = useSelector((state) => state.auth.balance);
  const [usdInput, setUsdInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form className="w-full flex flex-col" onSubmit={submitHandler}>
      <div className="bg-[#FFFFFF66] w-full rounded-[28px] text-[20px] flex">
        <input
          type="number"
          max={balance}
          min={25}
          value={usdInput}
          onChange={(e) => setUsdInput(e.target.value)}
          className="rounded-[28px] py-[22px] pl-[20px] w-full"
          placeholder="Enter an amount"
        />
        <div
          className="bg-white rounded-[28px] text-[#37C100] flex items-center justify-center px-6"
          onClick={() => setUsdInput(balance ? balance.toFixed(3) : 0)}
        >
          MAX
        </div>
      </div>
      <p className="text-[14px] pl-[30px] py-2">
        Your Banas {balance ? balance.toFixed(3) : "00.00"} USD
      </p>
      <div className="w-full grid grid-cols-3 gap-2 text-[20px]">
        <div
          className="border-[3px] border-white rounded-[28px] py-[16px] text-center"
          onClick={() =>
            setUsdInput(balance ? (balance.toFixed(3) * 0.25).toFixed(3) : 0)
          }
        >
          25%
        </div>
        <div
          className="border-[3px] border-white rounded-[28px] py-[16px] text-center"
          onClick={() =>
            setUsdInput(balance ? (balance.toFixed(3) * 0.5).toFixed(3) : 0)
          }
        >
          50%
        </div>
        <div
          className="border-[3px] border-white rounded-[28px] py-[16px] text-center"
          onClick={() =>
            setUsdInput(balance ? (balance.toFixed(3) * 0.75).toFixed(3) : 0)
          }
        >
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
    </form>
  );
};

export default UsdInput;
