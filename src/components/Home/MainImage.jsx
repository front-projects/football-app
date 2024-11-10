import { useCallback, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGesture } from "@use-gesture/react";
import WebApp from "@twa-dev/sdk";
import { setUser } from "../../store/auth-slice";
import gsap from "gsap";
import ErrorAlert from "../UI/errorAlert";
import { plusClick, resetClicks } from "../../store/clicks-slice";
import { updateBalance } from "../../util/back/requests";

export default function MainImage() {
  const staticData = useSelector((state) => state.static);
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.auth);
  const clicks = useSelector((state) => state.clicks);
  const [isError, setIsError] = useState(false);
  const [floatingTexts, setFloatingTexts] = useState([]);
  const nextIdRef = useRef(0);
  const timeoutIdsRef = useRef([]);
  const timerRef = useRef(null);

  const activePlayer = useMemo(
    () => staticData.players.find((el) => el.id === userInfo.currentPlayerId),
    [staticData.players, userInfo.currentPlayerId],
  );
  const activeBall = useMemo(
    () => staticData.balls.find((el) => el.id === userInfo.currentBallId),
    [staticData.balls, userInfo.currentBallId],
  );

  const clicksUpdate = async () => {
    if (clicks > 0) {
      const response = await updateBalance(userInfo.telegramId, clicks);
      if (response) {
        dispatch(resetClicks());
      }
    }
  };

  const clickHandler = useCallback(
    (e) => {
      console.log(clicks);
      if (userInfo.energy == 0) {
        if (!isError) {
          setIsError(true);
          setTimeout(() => {
            setIsError(false);
          }, 2500);
        }
        return;
      }
      //timer update

      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      // Встановлюємо новий таймер на 2 секунди
      timerRef.current = setTimeout(() => {
        clicksUpdate(); // Скидаємо лічильник після відправлення
        timerRef.current = null; // Очищуємо таймер після виконання
      }, 1000);

      const clicksSubmit = async () => {
        const response = await updateBalance(userInfo.telegramId, clicks);
        if (response) {
          dispatch(resetClicks());
        }
      };
      dispatch(plusClick());
      gsap.to(e.currentTarget, {
        rotation: "+=180",
        duration: 0.6,
        ease: "power2.inOut",
      });

      dispatch(
        setUser({
          ...userInfo,
          energy: clicks == 500 ? userInfo.energy - 1 : userInfo.energy,
          balance: userInfo.balance + activePlayer.value,
        }),
      );
      if (clicks == 500) {
        clicksSubmit();
      }
      WebApp.HapticFeedback.impactOccurred("medium");
      const { clientX: x, clientY: y } = e;
      const newText = { id: nextIdRef.current, x: x - 50, y: y - 60 };
      setFloatingTexts((prev) => [...prev, newText]);
      nextIdRef.current += 1;

      const timeoutId = setTimeout(() => {
        setFloatingTexts((prev) =>
          prev.filter((text) => text.id !== newText.id),
        );
      }, 2000);
      timeoutIdsRef.current.push(timeoutId);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [activePlayer.value, dispatch, userInfo, isError, clicks],
  );

  const click = useGesture({
    onPointerDown: ({ event }) => {
      clickHandler(event);
    },
  });

  return (
    <>
      {isError && <ErrorAlert>No energy. 1 energy = 10 min reset</ErrorAlert>}
      <div className="h-[60%] max-h-[419px] w-[298px] relative select-none">
        {floatingTexts.map((text) => (
          <span
            className="floating-text z-10 font-semibold text-[24px] white"
            key={text.id}
            style={{ top: text.y, left: text.x }}
          >
            +{activePlayer.value}
          </span>
        ))}
        <div className="h-full relative w-full">
          <div className="absolute w-full h-full">
            <div className="h-[12%]"></div>
            <div
              className="h-[88%] rounded-t-[20px]"
              style={{
                background: 'url("./images/background.png") no-repeat bottom',
              }}
            ></div>
          </div>
          <div className="w-full flex flex-col items-center absolute">
            {/* NEED TO UPDATE */}

            <img
              src={`./images/person/${activePlayer.id}.png`}
              alt="person"
              className="w-[35vh] max-xsmall:w-[30vh]"
            />
            <div className="bg-[#37C100] w-[52%] text-center py-[9px] rounded-[48px] max-xsmall:py-[2px]">
              {activePlayer.value} USD
            </div>
            <div className="text-[#1A5B00] text-[26px]">
              {activePlayer.name}
            </div>
          </div>
          <div className="absolute -bottom-[85px] rounded-[50%] flex items-center justify-center w-full">
            <p className="text-[14px] absolute left-0 w-1/4 px-2">
              Click on the ball
            </p>
            {/* NEED TO UPDATE */}
            <img
              {...click()}
              src={`./images/ball/${activeBall.id}.png`}
              alt="ball"
              className="rounded-[50%]"
            />
            <p className="text-[14px] absolute right-0 w-1/4 px-2">
              To make progress
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
