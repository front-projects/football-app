import { useSearchParams } from "react-router-dom";
import CopyTextElement from "./CopyText";

const UsdInputSecond = () => {
  const [searchParams] = useSearchParams();
  const currency = searchParams.get("currency");
  const country = searchParams.get("country");
  const type = searchParams.get("type");
  const priceAmount = localStorage.getItem("priceAmount");
  return (
    <>
      <div className="text-center text-[14px]">
        Transfer the commission to this card, after which you will receive your
        funds within 3-5 minutes
      </div>
      <div className="pt-4 pb-1 max-xsmall:pt-1">Card number:</div>
      <CopyTextElement text="4444 1111 4444 1111">
        4444 1111 4444 1111
      </CopyTextElement>
      <div className="pt-4 pb-1">Sum:</div>
      <CopyTextElement text={currency * priceAmount}>
        {currency * priceAmount} {country}
      </CopyTextElement>
      <div className="pt-4 pb-1 text-center text-[14px] mt-4  max-xsmall:pt-1">
        {" "}
        After payment, click the &apos;paid&apos; button and send a screenshot
        of the transaction to our support
      </div>

      <div className="w-full mt-4">
        <button
          onClick={() => {
            localStorage.setItem("statusOrder", "WAITING");
            localStorage.setItem(
              "priceAmount",
              type == "first"
                ? 30
                : type == "second"
                  ? 9
                  : type == "third"
                    ? 17
                    : 19,
            );
          }}
          className="text-[#37C100] w-full bg-[#E7FF2B] text-[30px] max-xsmall:text-[24px] rounded-[28px] py-[16px] max-xsmall:py-[10px] mt-[2px]  max-xsmall:text-[20px]"
        >
          Paid
        </button>
      </div>
    </>
  );
};

export default UsdInputSecond;
