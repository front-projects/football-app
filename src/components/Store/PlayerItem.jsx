const PlayerItem = ({ player }) => {
  return (
    <div className="relative w-full min-h-[80%] h-[80%] bg-white/40 flex flex-col items-center rounded-[14px] mt-10">
      <div className="absolute w-[90px] -bottom-[10px] z-10 bg-[#E7FF2B] text-[#37C100] text-[10px] py-1 rounded-[28px] text-center">
        BUY {player.price} USD
      </div>

      <div className="absolute -top-8 h-[80%] max-h-[80%] flex flex-col items-center w-full">
        <img
          src={`./images/person/${player.id}.png`}
          alt="person"
          className="h-full max-h-full max-w-full"
        />

        <div className="bg-white rounded-[28px] text-[10px] text-[#37C100] w-[90px] py-1 text-center">
          {player.value} USD
        </div>

        <div className="text-[14px]">{player.name}</div>
      </div>
    </div>
  );
};

export default PlayerItem;
