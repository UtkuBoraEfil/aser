import { SecondSection } from "@/components/secondSection";
import { FirstSection } from "@/components/firstSection";
import { Contact } from "@/components/contact";


export default function Home() {
  return (
    <main>
      <div className="w-full h-screen">
        <FirstSection/>
      </div>
      <SecondSection/>
      <Contact/>
    </main>
  );
}
