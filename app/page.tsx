import { SecondSection } from "@/components/secondSection";
import { FirstSection } from "@/components/firstSection";


export default function Home() {
  return (
    <main>
      <div className="w-full h-screen">
        <FirstSection/>
      </div>
      <SecondSection/>
    </main>
  );
}
