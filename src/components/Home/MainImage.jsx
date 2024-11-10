import { useCallback, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGesture } from "@use-gesture/react";
import WebApp from "@twa-dev/sdk";
import { setUser } from "../../store/auth-slice";
import gsap from "gsap";

export default function MainImage() {
  const staticData = useSelector((state) => state.static);
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.auth);
  const [floatingTexts, setFloatingTexts] = useState([]);
  const nextIdRef = useRef(0);
  const timeoutIdsRef = useRef([]);

  const activePlayer = staticData.players.find(
    (el) => el.id == userInfo.currentPlayerId,
  );
  const activeBall = staticData.balls.find(
    (el) => el.id == userInfo.currentBallId,
  );

  const clickHandler = useCallback(
    (e) => {
      gsap.to(e.currentTarget, {
        rotation: "+=360", // обертання по осі X на 360 градусів
        duration: 0.6,
        ease: "power2.inOut",
      });
      dispatch(
        setUser({
          ...userInfo,
          balance: userInfo.balance + activePlayer.value,
        }),
      );
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
    [activePlayer.value, dispatch, userInfo],
  );

  const click = useGesture({
    onPointerDown: ({ event }) => {
      clickHandler(event);
    },
  });

  return (
    <div className="h-[60%] max-h-[419px] w-[298px] relative select-none">
      {floatingTexts.map((text) => (
        <span
          className="floating-text z-10 font-semibold text-[15px] text-black"
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
          <div className="text-[#1A5B00] text-[26px]">{activePlayer.name}</div>
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
  );
}
