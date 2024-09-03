import { AboutAser } from "./ui/about-aser";
import { InfiniteLogos } from "./ui/infinite-logos";
import { News } from "./ui/news";
import { Solutions } from "./ui/solutions";

export function SecondSection () {
  return (
    <section className="px-20 ">
        <div className="border-x border-b border-white px-16 pt-10 pb-14">
            <AboutAser />
            <Solutions />
            <InfiniteLogos />
            <News />
        </div>
      
    </section>
  );
};
