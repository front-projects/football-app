import { useSelector } from "react-redux";
import { BsLightningChargeFill } from "react-icons/bs";

export default function Progress() {
  const user = useSelector((state) => state.auth);

  return (
    <div className="mt-[80px] text-[#E7FF2B] text-center select-none">
      <h1 className="text-[42px] max-xsmall:text-[36px]">
        {user.balance.toFixed(3)} USD
      </h1>
      <p className="text-[20px] mt-[-10px] max-xsmall:text-[16px] flex gap-2 items-center justify-center">
        Progress{" "}
        <div
          className={`flex items-center ${user.energy == 0 ? "text-red-600" : ""}`}
        >
          ({user.energy}/5 <BsLightningChargeFill />)
        </div>
      </p>
    </div>
  );
}
