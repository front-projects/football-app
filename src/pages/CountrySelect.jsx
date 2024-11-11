import { useState } from "react";
import { Link } from "react-router-dom";
import CountrySelectItem from "../components/Wallet/CountrySelect/CountrySelectItem";
import WebApp from "@twa-dev/sdk";

const CountrySelect = () => {
  const [activeCountry, setActiveCountry] = useState(() => {
    try {
      const test = WebApp.CloudStorage;
      const country = test.getItem("country");
      console.log(country);
      // Check if CloudStorage is available and if "country" is set
      return test || "ARS";
    } catch (error) {
      console.error("CloudStorage method unsupported or unavailable:", error);
      return "ARS"; // Fallback to "ARG" if CloudStorage is unavailable
    }
  });

  return (
    <div className="w-full h-full pt-[40px]">
      <div className="max-h-[80%] grid grid-cols-2 gap-[15px]">
        <div className="rounded-[28px] bg-[#FFFFFF66] text-[20px] flex items-center justify-center w-full h-[124px] px-[24px] text-center">
          Pick the country you live in
        </div>
        {/* ARG */}
        <CountrySelectItem
          img="./images/countries/1.png"
          active={activeCountry == "ARS"}
          onClick={() => {
            setActiveCountry("ARS");
            WebApp.CloudStorage.setItem("country", "ARS");
          }}
        />
        <CountrySelectItem
          img="./images/countries/2.png"
          active={activeCountry == "BOL"}
          onClick={() => {
            setActiveCountry("BOL");
            WebApp.CloudStorage.setItem("country", "BOL");
          }}
        />
        <CountrySelectItem
          img="./images/countries/3.png"
          active={activeCountry == "CHL"}
          onClick={() => {
            setActiveCountry("CHL");
            WebApp.CloudStorage.setItem("country", "CHL");
          }}
        />
        <CountrySelectItem
          img="./images/countries/4.png"
          active={activeCountry == "ECD"}
          onClick={() => {
            setActiveCountry("ECD");
            WebApp.CloudStorage.setItem("country", "ECD");
          }}
        />
        <CountrySelectItem
          img="./images/countries/5.png"
          active={activeCountry == "MXN"}
          onClick={() => {
            setActiveCountry("MXN");
            WebApp.CloudStorage.setItem("country", "MXN");
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
