import { ArrowRight, ArrowLeft } from "lucide-react";
import { useSwiper } from "swiper/react";

export function CustomNavigation () {
    const swiper = useSwiper();
  return (
    <div className="flex flex-col absolute bottom-0 right-0 w-20 ">
    <button
      className="border-t border-white w-full h-36 grid place-items-center"
      onClick={() => swiper.slidePrev()}
    >
      <ArrowLeft />
    </button>
    <button
      className="border-t border-white w-full h-36 grid place-items-center"
      onClick={() => swiper.slideNext()}
    >
      <ArrowRight />
    </button>
  </div>
  );
};
