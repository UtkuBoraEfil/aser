import Link from "next/link";
import { SolutionCorner } from "./solutionCorner";

export function Solutions() {
  const solutions = [
    "Railway Automation",
    "Telecommunication",
    "Energy Automation",
  ];
  return (
    <>
      <h1 className="text-3xl py-10 ">
        Solutio
        <span className="underline underline-offset-[12px] decoration-[#FF0000]">
          ns
        </span>
      </h1>
      <div className="w-full md:flex lg:gap-10 gap-3">
        {solutions.map((solution, index) => (
            // hemen alttaki div link olacak
          <div key={index} className="flex justify-between w-full pb-5 md:pb-0   md:block">
            <div
              className={`bg-solution-image-${
                index + 1
              } bg-cover bg-no-repeat bg-center 2xl:w-[340px] 2xl:h-[200px] xl:w-[280px] xl:h-[140px] w-[200px] h-[100px]  relative`}
            >
              <div className="absolute -bottom-1 right-0 ">
                <SolutionCorner />
              </div>
            </div>
            <h1 className="text-xl pt-2 h-full align-text-bottom  ">{solution}</h1>
          </div>
        ))}
      </div>
    </>
  );
}
