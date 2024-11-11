import { InviteIcon } from "../UI/icons";
import WebApp from "@twa-dev/sdk";

const InviteButton = () => {
  // const inviteFriend = () => {
  //   WebApp.HapticFeedback.impactOccurred("light");
  //   const text = `Text for invite`;
  //   const url = `https://t.me/share/url?url=&text=${encodeURIComponent(text)}`;
  //   WebApp.openTelegramLink(url);
  // };
  const inviteFriend = () => {
    WebApp.shareText("Тут можна поділитися цим текстом із друзями!");
  };

  return (
    <>
      <button
        onClick={inviteFriend}
        className="text-[#37C100] bg-[#E7FF2B] mt-[40px] max-xsmall:mt-[30px] rounded-[28px] py-3 w-full flex items-center justify-center gap-[20px]"
      >
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
