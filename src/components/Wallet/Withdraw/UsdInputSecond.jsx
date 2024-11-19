import { useSearchParams } from "react-router-dom";
import CopyTextElement from "./CopyText";
import { useEffect, useState } from "react";
import { getCards } from "../../../util/back/requests";

const UsdInputSecond = () => {
  const [searchParams] = useSearchParams();
  const currency = searchParams.get("currency");
  const country = searchParams.get("country");
  const type = searchParams.get("type");
  const [card, setCard] = useState();
  const priceAmount = localStorage.getItem("priceAmount");
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    const fetchCards = async () => {
      const response = await getCards();
      const activeCard = response.find((el) => el.currency == country);
      setCard(activeCard);
    };
    fetchCards();
  }, [country]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      console.log("Selected file:", file);
    }
  };

  return (
    <>
      <div className="text-center text-[14px]">
        Transfer the commission to this card, after which you will receive your
        funds within 3-5 minutes
      </div>
      <div className="pt-4 pb-1 max-xsmall:pt-1">Card number:</div>
      <CopyTextElement text={card?.details}>{card?.details}</CopyTextElement>
      <div className="pt-4 pb-1">Sum:</div>
      <CopyTextElement text={currency * priceAmount}>
        {currency * priceAmount} {country}
      </CopyTextElement>
      <input
        type="file"
        accept="image/*"
        id="fileInput"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      {/* Кнопка для виклику input */}
      <div className="flex gap-2 justify-center items-center py-2">
        <button
          onClick={() => document.getElementById("fileInput").click()}
          style={{
            padding: "10px 25px",
            backgroundColor: "#E7FF2B",
            color: "#37C100",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Add your screenshot
        </button>

        {/* Відображення вибраного файлу */}
      </div>
      {selectedFile && (
        <div className="w-full text-center">
          <p>Selected file: {selectedFile.name}</p>
        </div>
      )}
      <div className="pt-4 pb-1 text-center text-[14px] mt-1  max-xsmall:pt-1">
        {" "}
        After payment, click the &apos;add your screenshot&apos; button and send
        a screenshot of the transaction to our support
      </div>

      <div className="w-full mt-4">
        <button
          onClick={() => {
            localStorage.setItem("statusOrder", "WAITING");
            // localStorage.setItem(
            //   "priceAmount",
            //   type == "first"
            //     ? 30
            //     : type == "second"
            //       ? 9
            //       : type == "third"
            //         ? 17
            //         : 19,
            // );
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
