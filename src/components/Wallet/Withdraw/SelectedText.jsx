const SelectedText = ({ activeCurrency, onClickOk, onClickCancel }) => {
  return (
    <div className="text-[18px] text-justify">
      You need to pay a fee to exchange from cryptocurrency to your currency, it
      costs - {7 * activeCurrency?.value} {activeCurrency?.country} and then you
      will automatically receive the funds
      <div className="flex gap-2 w-full items-center  mt-4">
        <button
          onClick={onClickOk}
          className=" bg-[#E7FF2B] rounded-md w-full text-[#37C100] py-1"
        >
          Ok
        </button>
        <button
          onClick={onClickCancel}
          className="w-full rounded-md outline outline-2 outline-[#E7FF2B] py-1"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default SelectedText;
