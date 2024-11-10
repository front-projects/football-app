const BallItem = ({ ball }) => {
  return (
    <div className="relative w-full min-h-[80%] h-[80%] bg-white/40 flex flex-col items-center rounded-[14px] mt-10">
      <div className="absolute -top-8 h-[80%] max-h-[80%] flex flex-col items-center w-full">
        <img
          src={`./images/ball/${ball.id}.png`}
          alt="person"
          className="h-full max-h-full max-w-full"
        />
        <div className="text-[14px]">{ball.name}</div>

        <div className="w-[90px] bg-[#E7FF2B] text-[#37C100] text-[10px] py-1 rounded-[28px] text-center">
          BUY {ball.price} USD
        </div>
      </div>
    </div>
  );
};

export default BallItem;
