import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { useLayoutEffect, useRef } from "react";
import { chunkArray } from "../util/front/func";
import { ButtonLeft, ButtonRight } from "../components/UI/icons";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import PlayerItem from "../components/Store/PlayerItem";
import { useSelector } from "react-redux";
import gsap from "gsap";

export default function StorePlayers() {
  const players = useSelector((state) => state.static.players);
  const swiperRef = useRef(null);

  const groupedPlayers = chunkArray(players, 4);

  useLayoutEffect(() => {
    const anim = gsap.to(".football-player", {
      translateY: 0,
      opacity: 1,
      stagger: 0.2,
    });
    return () => anim.kill();
  }, []);

  return (
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
            <div className="grid grid-cols-2 grid-rows-2 gap-[6px] h-full pb-[40px]">
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
