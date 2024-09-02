"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import React, { useRef, useState } from "react";

interface InsideOfSliderProps {
  thumbsSwiper: any;
  setThumbsSwiper: React.Dispatch<React.SetStateAction<any>>;
}

export function InsideOfSlider({
  thumbsSwiper,
  setThumbsSwiper,
}: InsideOfSliderProps) {
  let slides = [
    "[01] - Defense System",
    "[02] - Railway Automation",
    "[03] - Renewable Energy",
    "[04] - Telecommunication",
  ];
  const [activeSwiper, setActiveSwiper] = useState(0);
  return (
    <>
      <Swiper
        onSwiper={setThumbsSwiper}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        slideActiveClass="swiper-slide-thumb-active"
        className="w-full max-w-[456px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} virtualIndex={index} className="!w-fit p-1">
            <div
              className={`w-24 h-14 cursor-pointer flex justify-center bg-slider-image-${
                index + 1
              } bg-cover bg-no-repeat bg-center `}
            ></div>
                        <div className="w-full h-full hidden">
                <div className="absolute top-0 left-0 border-t border-l border-white w-2 h-2"></div>
                <div className="absolute top-0 right-0 border-t border-r border-white w-2 h-2"></div>
                <div className="absolute bottom-0 right-0 border-b border-r border-white w-2 h-2"></div>
                <div className="absolute bottom-0 left-0 border-b border-l border-white w-2 h-2"></div>
                <div className="w-full h-72 bottom-0 border-t border-white absolute p-5"></div>
              </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <ul className="">
        {slides.map((slide, index)=>(
          <li key={index}>
            <p className=" text-xs opacity-60 ">{slide}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
