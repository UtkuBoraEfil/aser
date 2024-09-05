import { AboutAser } from "./ui/about-aser";
import { InfiniteLogos } from "./ui/infinite-logos";
import { News } from "./ui/news";
import { Solutions } from "./ui/solutions";

export function SecondSection () {
  return (
    <section className="lg:px-20 md:px-12 px-8 ">
        <div className="border-x border-b border-white lg:px-16 md:px-10 px-5 pt-10 pb-14">
            <AboutAser />
            <Solutions />
            <InfiniteLogos />
            <News />
        </div>
      
    </section>
  );
};
