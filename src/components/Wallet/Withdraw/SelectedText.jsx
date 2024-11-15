import { IoIosWarning } from "react-icons/io";

const SelectedText = ({ activeCurrency, onClickOk }) => {
  return (
    <div className="text-[18px] flex flex-col">
      <div className="flex items-center justify-center pb-4 text-[300%] text-yellow-300">
        <IoIosWarning />
      </div>
      You need to pay a fee to exchange from cryptocurrency to your currency, it
      costs - {7 * activeCurrency?.value} {activeCurrency?.country} and then you
      will receive your cash within 3-5 minutes
      <div className="flex gap-2 w-full items-center  mt-4">
        <button
          onClick={onClickOk}
          className=" bg-[#E7FF2B] rounded-md w-full text-[#37C100] py-1"
        >
          Ok
        </button>
        {/* <button
          onClick={onClickCancel}
          className="w-full rounded-md outline outline-2 outline-[#E7FF2B] py-1"
        >
          Cancel
        </button> */}
      </div>
    </div>
  );
};

export default SelectedText;
