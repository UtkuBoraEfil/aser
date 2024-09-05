import Link from "next/link";
import { SolutionCorner } from "./solutionCorner";
import { cn } from "@/lib/utils";

export function Solutions() {
  const solutions = [
    "Railway Automation",
    "Telecommunication",
    "Energy Automation",
  ];
  return (
    <>
      <h1 className="lg:text-3xl text-2xl  py-10 text-center md:text-start ">
        Solutio
        <span className="underline underline-offset-[12px] decoration-[#FF0000]">
          ns
        </span>
      </h1>
      <div className="w-full flex flex-col lg:flex-row lg:gap-10 gap-5">
        {solutions.map((solution, index) => (
            // hemen alttaki div link olacak
          <div key={index} className={cn("flex flex-col md:flex-row  w-full  gap-5 pb-10 md:pb-0   lg:block", index%2 === 1 ? "md:flex-row-reverse lg:block" : "")}>
            <div
              className={`bg-solution-image-${
                index + 1
              } bg-cover bg-no-repeat bg-center 2xl:w-[340px] 2xl:h-[200px] xl:w-[280px] xl:h-[140px] md:w-[200px] md:h-[100px] w-[280px] h-[140px] mx-auto md:mx-0   relative`}
            >
              <div className="absolute -bottom-1 right-0 ">
                <SolutionCorner />
              </div>
            </div>
            <h1 className="text-xl pt-2 grid place-content-center lg:place-content-start ">{solution}</h1>
          </div>
        ))}
      </div>
    </>
  );
}
