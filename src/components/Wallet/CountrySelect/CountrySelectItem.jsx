import { CountrySelectIcon } from "../../UI/icons";

const CountrySelectItem = ({ img, active, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`w-full h-full relative rounded-[28px] ${active ? "outline outline-[5px] outline-[#E7FF2B]" : ""}`}
    >
      <img
        src={img}
        alt=""
        className="object-cover w-full h-full rounded-[28px] max-h-[124px]"
      />
      {active && (
        <div className="absolute right-4 bottom-4">
          <CountrySelectIcon />
        </div>
      )}
    </div>
  );
};

export default CountrySelectItem;
