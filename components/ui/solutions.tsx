import Link from "next/link";

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
      <div className="w-full flex gap-10">
        {solutions.map((solution, index) => (
            // hemen alttaki div link olacak
          <div key={index}>
            <div
              className={`bg-solution-image-${
                index + 1
              } bg-cover bg-no-repeat bg-center 2xl:w-[340px] 2xl:h-[200px] w-[280px] h-[140px]  relative`}
            >
              <div className="absolute -bottom-3 -right-7 w-20 h-12 bg-black -rotate-45  "></div>
            </div>
            <h1 className="text-xl pt-2">{solution}</h1>
          </div>
        ))}
      </div>
    </>
  );
}
