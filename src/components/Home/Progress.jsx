import { useSelector } from "react-redux";
import { BsLightningChargeFill } from "react-icons/bs";
import { useLayoutEffect } from "react";
import gsap from "gsap";

export default function Progress() {
  const user = useSelector((state) => state.auth);
  useLayoutEffect(() => {
    const anim = gsap.to("#progress-text", { translateY: 0, opacity: 1 });
    return () => anim.kill();
  }, []);

  return (
    <div className="mt-[80px] text-[#E7FF2B] text-center select-none">
      <h1 className="text-[42px] max-xsmall:text-[36px]">
        {user.balance.toFixed(2)} USD
      </h1>
      <div
        className="text-[20px] mt-[-10px] max-xsmall:text-[16px] flex gap-2 items-center justify-center translate-y-[40px] opacity-0"
        id="progress-text"
      >
        Progress{" "}
        <div
          className={`flex items-center ${user.energy == 0 ? "text-red-600" : ""}`}
        >
          ({user.energy}/5 <BsLightningChargeFill />)
        </div>
      </div>
    </div>
  );
}
