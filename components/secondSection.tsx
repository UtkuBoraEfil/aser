import { AboutAser } from "./ui/about-aser";
import { InfiniteLogos } from "./ui/infinite-logos";
import { Solutions } from "./ui/solutions";

export function SecondSection () {
  return (
    <section className="px-20 ">
        <div className="border-x border-white px-16 pt-10 pb-40">
            <AboutAser />
            <Solutions />
            <InfiniteLogos />
        </div>
      
    </section>
  );
};
