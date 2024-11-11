import WebApp from "@twa-dev/sdk";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/auth-slice";
import { checkChannel } from "../../util/back/requests";

const Channel = () => {
  const user = useSelector((state) => state.auth);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState();
  const [success, setIsSuccess] = useState();
  const [first, setFirst] = useState(false);
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setFirst(true);
    const response = await checkChannel(first);
    if (response) {
      WebApp.HapticFeedback.notificationOccurred("success");
      setIsSuccess(true);
      setError(false);
      dispatch(setUser({ ...user, balance: user.balance + 3 }));
    } else {
      setError(true);
    }
    setIsLoading(false);
  };

  return (
    <form
      onSubmit={submitHandler}
      className={`relative border-[3px]  rounded-[28px] px-[10px] pt-[20px] max-xsmall:pt-[10px] pb-[26px] bg-[#FFFFFF] flex flex-col items-center  ${error ? "border-red-600" : success ? "border-green-400" : "border-[#007ED2]"}`}
    >
      <h1 className="text-[#E7FF2B] text-[25px] max-xsmall:text-[18px]">
        +3 USD
      </h1>
      <p className="text-[11px] text-[#007ED2]">
        Subscribe to telegram and get +5 USD
      </p>
      <div className="bg-[#007ED2] w-full rounded-[28px] mt-[11px] text-[11px] py-[10px] w-max px-[16px]">
        Subscribe
      </div>
      <button
        disabled={success}
        type="submit"
        className="absolute left-1/2 -translate-x-1/2 -bottom-4 py-2 bg-[#E7FF2B] text-[#37C100] rounded-[28px] w-max px-[20px] text-[11px]"
      >
        {isLoading ? "Sending..." : success ? "Received" : "Get a bonus "}
      </button>
    </form>
  );
};

export default Channel;
