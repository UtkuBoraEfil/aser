export function News () {
    let news = ["27th International Exhibition", "March 14-15"]
  return (
    <div>
        <h1 className="text-3xl pb-10">Ne<span className="underline underline-offset-[12px] decoration-[#FF0000]">ws</span></h1>
        <ul className="flex flex-col gap-8 h-full">
      {news.map((item, index) => (
        <li key={index}>
            {/* burasi da link olacak */}
            <h1 className="text-3xl text-[#FF0000] h-full"> [{String(index + 1).padStart(2, '0')}] - <span className=" text-[44px] underline decoration-[#FF0000]"> {item}</span> </h1>
        </li>
      ))}
    </ul>
    </div>
  );
};
