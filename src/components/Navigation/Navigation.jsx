import { BonucIcon, HomeIcon, StoreIcon, WalletIcon } from "../UI/icons";
import NavItem from "./Nav-Item";

export default function Navigation() {
  return (
    <nav className="w-screen h-[79px] flex items-center justify-center w-[298px] pb-[29px] gap-[16px] px-[3px]">
      <NavItem to="/menu/home" title="Home">
        <HomeIcon />
      </NavItem>
      <NavItem to="/menu/store" title="Store">
        <StoreIcon />
      </NavItem>
      <NavItem to="/menu/wallet" title="Wallet">
        <WalletIcon />
      </NavItem>
      <NavItem to="/menu/bonus" title="Bonus">
        <BonucIcon />
      </NavItem>
    </nav>
  );
}
