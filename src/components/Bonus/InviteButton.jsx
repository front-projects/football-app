import { InviteIcon } from "../UI/icons";

const InviteButton = () => {
  return (
    <>
      <button className="text-[#37C100] bg-[#E7FF2B] mt-[40px] max-xsmall:mt-[30px] rounded-[28px] py-3 w-full flex items-center justify-center gap-[20px]">
        <p className="text-[18px] pt-1 max-xsmall:text-[14px]">
          Invite a friend
        </p>
        <div>
          <InviteIcon />
        </div>
      </button>
      <div className="text-[11px] w-full text-center mt-2">
        Invite 10 people and get 4 USD bonus for it
      </div>
    </>
  );
};

export default InviteButton;
