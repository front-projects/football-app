import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { useEffect, useRef, useState } from "react";
import { getAllBalls } from "../util/back/requests";
import { chunkArray } from "../util/front/func";
import { ButtonLeft, ButtonRight } from "../components/UI/icons";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import PlayerItem from "../components/Store/PlayerItem";

export default function StorePlayers() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [players, setPlayers] = useState([]);
  const swiperRef = useRef(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await getAllBalls();
        setPlayers(response);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const groupedPlayers = chunkArray(players, 6);

  return isLoading ? (
    <div className="w-full h-full flex items-center justify-center text-3xl">
      Loading...
    </div>
  ) : error ? (
    <p className="w-full h-full flex items-center justify-center text-3xl text-red-600 font- px-4 text-center">
      Something went wrong.
    </p>
  ) : (
    <>
      <Swiper
        spaceBetween={50}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={1}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="h-full"
        style={{ height: "calc(100% - 30px)" }}
      >
        {groupedPlayers.map((group, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-3 gap-[6px] h-full pb-[40px]">
              {group.map((player, idx) => (
                <PlayerItem key={idx} player={player} />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="pb-[18px] flex flex-col items-center justify-center">
        <div></div>
        <div className="flex gap-[10px]">
          <button
            className="bg-[#E7FF2B] w-[84px] h-[30px] rounded-[28px] flex items-center justify-center"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <ButtonLeft />
          </button>
          <button
            className="bg-[#E7FF2B] w-[84px] h-[30px] rounded-[28px] flex items-center justify-center"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <ButtonRight />
          </button>
        </div>
      </div>
    </>
  );
}
