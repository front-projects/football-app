import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  buyNewBall,
  getBoughtBalls,
  getUserInfo,
  selectBall,
} from "../../util/back/requests";
import { setUser } from "../../store/auth-slice";
import Modal from "../UI/Modal";
import ErrorAlert from "../UI/errorAlert";
import { setStatic } from "../../store/static-slice";
import WebApp from "@twa-dev/sdk";

const BallItem = ({ ball }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const user = useSelector((state) => state.auth);
  const boughtBalls = useSelector((state) => state.static.boughtBalls);
  const staticData = useSelector((state) => state.static);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  // const telegramId = WebApp.initDataUnsafe.user.username;
  const telegramId = "kleinheisterkamp";
  const updateUser = async () => {
    setIsLoading(true);
    try {
      const balls = await getBoughtBalls(telegramId, ball.id);
      const updatedUserInfo = await getUserInfo(telegramId);
      if (balls && updatedUserInfo) {
        dispatch(setStatic({ ...staticData, boughtBalls: balls }));
        dispatch(setUser(updatedUserInfo));
        setIsOpen(false);
      } else {
        handleError();
      }
    } catch (error) {
      handleError();
    } finally {
      setIsLoading(false);
    }
  };

  const handleError = () => {
    setIsError(true);
    setTimeout(() => setIsError(false), 2500);
  };

  let status;

  if (user.currentBallId == ball.id) {
    status = "SELECTED";
  } else if (boughtBalls.some((element) => element.id == ball.id)) {
    status = "BOUGHT";
  } else if (
    !boughtBalls.some(
      (element) => element.id == ball.id && user.balance >= ball.price,
    )
  ) {
    status = "AVALIABLE";
  } else {
    status = "UNAVALIABLE";
  }

  const updateBall = async () => {
    // setIsLoading(true);
    WebApp.HapticFeedback.impactOccurred("soft");
    const response = await selectBall(user.telegramId, ball.id);
    if (response) {
      updateUser("UPDATE");
    } else {
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 2500);
    }
  };

  const buyBall = async () => {
    setIsLoading(true);
    const response = await buyNewBall(user.telegramId, ball.id);
    if (response) {
      WebApp.HapticFeedback.notificationOccurred("success");
      updateUser("BUY");
    } else {
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 2500);
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        Do you realy want to buy this player? {ball.price} USD
        <div className="flex gap-2 w-full items-center  mt-4">
          <button
            onClick={buyBall}
            className=" bg-[#E7FF2B] rounded-md w-full text-[#37C100] py-1"
          >
            Yes
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="w-full rounded-md border-2 border-[#E7FF2B] py-1"
          >
            Cancel
          </button>
        </div>
      </Modal>
      <div
        className={`ball-item  relative w-full min-h-[80%] h-[80%] bg-white/40 flex flex-col items-center rounded-[14px] mt-10 ${status == "SELECTED" ? "border-[3px] border-[#E7FF2B]" : ""}`}
      >
        <div className="absolute -top-8 h-[80%] max-h-[80%] flex flex-col items-center w-full">
          <img
            src={`./images/ball/${ball.id}.png`}
            alt="person"
            className="h-full max-h-full max-w-full"
          />
          <div className="text-[14px]">{ball.name}</div>

          <div className="w-[90px] bg-[#E7FF2B] text-[#37C100] text-[10px] py-1 rounded-[28px] text-center">
            {status == "SELECTED" && "SELECTED"}
            {status == "BOUGHT" && (
              <div onClick={updateBall}>
                {isLoading ? "SELECTING..." : "SELECT"}
              </div>
            )}
            {status == "AVALIABLE" && (
              <div onClick={() => setIsOpen(true)}>
                {isLoading ? "Buying... " : `BUY ${ball.price} USD`}
              </div>
            )}
            {status == "UNAVALIABLE" && (
              <div className="text-gray-600">BUY {ball.price} USD</div>
            )}
          </div>
        </div>
      </div>
      {isError && <ErrorAlert>Something went wrong, try again</ErrorAlert>}
    </>
  );
};

export default BallItem;
