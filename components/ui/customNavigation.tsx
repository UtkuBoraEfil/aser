import { ArrowRight, ArrowLeft } from "lucide-react";
import { useSwiper } from "swiper/react";

export function CustomNavigation () {
    const swiper = useSwiper();
  return (
    <div className="flex flex-col absolute bottom-0 right-0 lg:w-20 md:w-12 w-8 ">
    <button
      className="border-t border-l md:border-l-0 border-white w-full h-36 grid place-items-center"
      onClick={() => swiper.slidePrev()}
    >
      <ArrowLeft />
    </button>
    <button
      className="border-y border-l md:border-l-0 md:border-b-0 border-white w-full h-36 grid place-items-center"
      onClick={() => swiper.slideNext()}
    >
      <ArrowRight />
    </button>
  </div>
  );
};
