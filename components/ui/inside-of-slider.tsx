"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { animate, motion, stagger, useAnimate } from "framer-motion";

interface InsideOfSliderProps {
  thumbsSwiper: any;
  setThumbsSwiper: React.Dispatch<React.SetStateAction<any>>;
  activeSlide: any;
}

export function InsideOfSlider({
  thumbsSwiper,
  setThumbsSwiper,
  activeSlide,
}: InsideOfSliderProps) {
  let slides = [
    "[01] - Defense System",
    "[02] - Railway Automation",
    "[03] - Renewable Energy",
    "[04] - Telecommunication",
  ];
  const [activeSwiper, setActiveSwiper] = useState(0);

  const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

  const variants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay:  0.1+ (index * 0.3),
        ease: "easeOut",
      },
    }),
  };

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
            <motion.div
              variants={variants}
              initial="initial"
              animate="animate"
              custom={index}
              className={`w-24 h-14 cursor-pointer flex justify-center bg-slider-image-${
                index + 1
              } bg-cover bg-no-repeat bg-center`}
            ></motion.div>
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
        {slides.map((slide, index) => (
          <li key={index}>
            <p
              className={cn(
                " text-xs opacity-60 ",
                activeSlide === index && "opacity-100"
              )}
            >
              {slide}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
