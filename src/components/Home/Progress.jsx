import { useSelector } from "react-redux";

export default function Progress() {
  const balance = useSelector((state) => state.auth.balance);

  return (
    <div className="mt-[80px] text-[#E7FF2B] text-center">
      <h1 className="text-[46px] max-xsmall:text-[36px]">
        {balance.toFixed(2)} USD
      </h1>
      <p className="text-[20px] mt-[-10px] max-xsmall:text-[16px]">Progress</p>
    </div>
  );
}
