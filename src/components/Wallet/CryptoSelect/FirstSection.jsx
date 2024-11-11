import WebApp from "@twa-dev/sdk";
import { Link, useNavigate } from "react-router-dom";

const FirstSection = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="mt-[20px] w-full grid grid-cols-2 gap-[20px]">
        <Link
          onClick={() => WebApp.HapticFeedback.impactOccurred("soft")}
          to="/menu/wallet/withdraw?type=current"
          className="relative bg-white text-[#37C100] rounded-[28px] p-[18px] text-[20px] leading-[18.21px] h-[132px]"
          id="current-wallet"
        >
          Current account
        </Link>
        <Link
          onClick={() => WebApp.HapticFeedback.impactOccurred("soft")}
          to="/menu/wallet/withdraw?type=card"
          className="relative bg-white text-[#37C100] rounded-[28px] p-[18px] text-[20px] leading-[18.21px] h-[132px]"
          id="mastercardvisa"
        >
          Mastercard Visa
        </Link>
      </div>
      <div
        onClick={() => {
          WebApp.HapticFeedback.impactOccurred("soft");
          navigate("/menu/wallet/withdraw?type=crypto");
        }}
        className="relative bg-white text-[#37C100] rounded-[28px] p-[30px] text-[34px] leading-[34px] h-[132px] mt-[20px]"
        id="crypto-wallet"
      >
        <p>Crypto</p>
        <p>Wallet</p>
      </div>
    </>
  );
};

export default FirstSection;
