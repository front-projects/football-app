import { WalletDollarIcon, WalletItemBg } from "../../UI/icons";

const WalletListItem = ({ data }) => {
  return (
    <div className="h-[63px] w-full relative">
      <div className="absolute inset-0">
        <WalletItemBg />
      </div>
      <div className="h-full w-full inset-0 absolute py-[12px] px-[38px] flex justify-between items-center">
        <div className="h-[39px] w-[39px]">
          <img src="./images/wallet-item.png" alt="" />
        </div>
        <div>
          <p className="text-[20px]">{data.nameSurname}</p>
          <p className="text-[11px]">20 USD</p>
        </div>
        <WalletDollarIcon />
      </div>
    </div>
  );
};

export default WalletListItem;
