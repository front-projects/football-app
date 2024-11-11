import { useState } from "react";
import { Link } from "react-router-dom";
import CountrySelectItem from "../components/Wallet/CountrySelect/CountrySelectItem";
import WebApp from "@twa-dev/sdk";

const CountrySelect = () => {
  const [activeCountry, setActiveCountry] = useState(() => {
    try {
      const country = localStorage.getItem("country");
      return country || "ARS";
    } catch (error) {
      return "ARS"; // Fallback to "ARG" if CloudStorage is unavailable
    }
  });

  return (
    <div className="w-full h-full pt-[40px]">
      <div className="max-h-[80%] grid grid-cols-2 gap-[15px] ">
        <div className="rounded-[28px] bg-[#FFFFFF66] text-[20px] flex items-center justify-center w-full h-[124px] px-[24px] text-center max-xsmall:max-h-[94px]">
          Pick the country you live in
        </div>
        {/* ARG */}
        <CountrySelectItem
          img="./images/countries/1.png"
          active={activeCountry == "ARS"}
          onClick={() => {
            WebApp.HapticFeedback.impactOccurred("soft");
            setActiveCountry("ARS");
            localStorage.setItem("country", "ARS");
          }}
        />
        <CountrySelectItem
          img="./images/countries/2.png"
          active={activeCountry == "COP"}
          onClick={() => {
            WebApp.HapticFeedback.impactOccurred("soft");
            setActiveCountry("COP");
            localStorage.setItem("country", "COP");
          }}
        />
        <CountrySelectItem
          img="./images/countries/3.png"
          active={activeCountry == "CLP"}
          onClick={() => {
            WebApp.HapticFeedback.impactOccurred("soft");
            setActiveCountry("CLP");
            localStorage.setItem("country", "CLP");
          }}
        />
        <CountrySelectItem
          img="./images/countries/4.png"
          active={activeCountry == "USD"}
          onClick={() => {
            WebApp.HapticFeedback.impactOccurred("soft");
            setActiveCountry("USD");
            localStorage.setItem("country", "USD");
          }}
        />
        <CountrySelectItem
          img="./images/countries/5.png"
          active={activeCountry == "MXN"}
          onClick={() => {
            WebApp.HapticFeedback.impactOccurred("soft");
            setActiveCountry("MXN");
            localStorage.setItem("country", "MXN");
          }}
        />
      </div>
      <div className="w-full text-center mt-[40px]">
        <Link
          to="/menu/wallet/crypto-select"
          className="bg-[#E7FF2B] rounded-[28px] text-[#37C100] py-[17px] px-[40px]"
        >
          Next step
        </Link>
      </div>
    </div>
  );
};

export default CountrySelect;
