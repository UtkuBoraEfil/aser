"use client";
import React, { useRef, useState, useEffect, use } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import { CustomNavigation } from "@/components/ui/customNavigation";
import { InsideOfSlider } from "@/components/ui/inside-of-slider";
import { SliderDesign } from "@/components/ui/slider-design";
import { CornerDownRight } from "lucide-react";
import scroll from "@/public/scroll.png";
import hamburger from "@/public/hamburger.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { motion } from "framer-motion";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrambleTextPlugin);

export function FirstSection() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  let slides = [0, 1, 2, 3];
  const titles = [
    "AUTOMATION SOLUTIONS TRUSTED THE WORLD OVER.",
    "Yarının teknolojilerini bugünden tasarlıyoruz.",
    "Yenilikçi çözümlerle geleceği şekillendiriyoruz.",
    "Dünyanın dört bir yanında güvenilir çözümler sunuyoruz.",
  ];
  const texts = [
    "The possession of technologies related to radar systems is critical for countries.",
    "Work harder son!",
    "just do it",
    "useless text",
  ];
  const [activeSwiper, setActiveSwiper] = useState(0);

  const title = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    // gsap code here...
    gsap.to(textRef.current, {
      duration: 2,
      scrambleText: {
        text: texts[activeSwiper],
        chars: "upperCase",
        revealDelay: 0.5,
        speed: 0.2,
        // tweenLength: false,
        // delimiter: " "
      },
    });
  }, [activeSwiper]); // <-- scope is for selector text (optional)

  return (
    <>
      <section className="absolute w-full h-full top-0 ">
        <Swiper
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          style={{ zIndex: 10 }}
          onSlideChange={(swiper) => setActiveSwiper(swiper.activeIndex)}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} virtualIndex={index}>
              <div
                className={`min-h-screen min-w-full bg-slider-image-${
                  index + 1
                } bg-cover bg-no-repeat bg-center `}
              ></div>
              {/* <Image src={slide} alt={`slide-${index}`} /> */}
            </SwiperSlide>
          ))}
          <div className="absolute top-0 z-20 lg:px-20 md:px-12 px-8 w-full min-h-screen">
            <div className=" min-w-full min-h-screen border-x border-white">
              <SliderDesign />
              <CustomNavigation />
            </div>
          </div>
        </Swiper>
        <section className="absolute top-0 w-full h-full lg:px-20 px-12 py-5 ">
          <div className="h-full w-full flex flex-col lg:px-16 md:px-10 px-4  relative z-30 ">
            <div className="w-full h-full relative z-30 pt-3 pb-12 flex  flex-col justify-between">
              <div>
                <p className="text-xs overline">Aser Technology</p>
              </div>
              <div className="">
                <p className="text-xs leading-none pl-2 border-l-2 border-white">
                  Power of Technology
                </p>
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 250,
                    scale: 0.5,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  className=" mx-auto"
                >
                  <h1
                    ref={title}
                    className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl font-bold  lg:leading-[92px] md:leading-[60px] leading-10 overflow-hidden"
                  >
                    {titles[activeSwiper]}
                  </h1>
                </motion.div>
              </div>
            </div>
            <div className="w-full min-h-64 relative z-30 py-12  flex gap-10 justify-between">
              <div className=" w-full h-full  flex-col justify-between hidden md:flex">
                <InsideOfSlider
                  thumbsSwiper={thumbsSwiper}
                  setThumbsSwiper={setThumbsSwiper}
                  activeSlide={activeSwiper}
                />
              </div>
              <div className="w-full">
                <p
                  ref={textRef}
                  className="text-sm overflow-hidden             "
                ></p>
                <button className="flex gap-2 border-b w-fit pt-4">
                  <CornerDownRight size={14} />
                  <p className="text-xs">View Details</p>
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>
      <h1 className="absolute z-40 top-5 right-0 lg:text-sm text-xs vertical-text lg:w-20 md:w-12 w-8 grid place-content-center">
        {"// POWER OF TECHNOLOGY"}
      </h1>
      <div className="flex flex-col h-screen justify-between relative z-40 top-0 left-0 py-5 lg:w-20 md:w-12 w-8">
        <h1 className="text-center  text-base">A</h1>
        <div className="flex justify-center">
          <Image src={hamburger} alt="scroll" />
        </div>
        <div className="flex justify-center">
          <Image src={scroll} alt="scroll" />
        </div>
      </div>
    </>
  );
}
