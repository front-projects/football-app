import { Link } from "react-router-dom";

const WalletCard = () => {
  return (
    <>
      <div
        className="w-full flex flex-col pl-[20px] py-[15px] text-[#1E1E1E] rounded-[25px] mt-[18px]"
        id="wallet-card"
      >
        <div className="w-max relative">
          <h1 className="text-[40px] w-max leading-10">100 000 USD</h1>
          <div className="w-full flex justify-end text-[14px]">
            {/* <div>**** 4562</div> */}
            <div>Your cash</div>
          </div>
          <div className="mt-8 text-[11px]">Withdrawal from 25 USD </div>
        </div>
      </div>
      <div className="w-full px-[20px]">
        <div className="w-full bg-[#E7FF2B5E] rounded-b-[25px] px-[10px] grid grid-cols-2 gap-[10px]">
          <Link
            to="/menu/wallet/history"
            className="border-[4px] border-white rounded-[28px] flex items-center justify-center py-[16px] my-[12px]"
          >
            History
          </Link>
          <Link
            to="/menu/wallet/country-select"
            className="rounded-[28px] flex items-center justify-center text-[#1E1E1E] bg-white py-[16px] my-[12px]"
          >
            Withdr
          </Link>
        </div>
      </div>
    </>
  );
};

export default WalletCard;
