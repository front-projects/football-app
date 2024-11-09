import { useSelector } from "react-redux";

export default function MainImage() {
  const staticData = useSelector((state) => state.static);
  const userInfo = useSelector((state) => state.auth);

  const activePlayer = staticData.players.find(
    (el) => el.id == userInfo.currentPlayerId,
  );
  const activeBall = staticData.balls.find(
    (el) => el.id == userInfo.currentBallId,
  );
  return (
    <div className="h-[60%] max-h-[419px] w-[298px] relative">
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
            src={`./images/ball/1.png`}
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
