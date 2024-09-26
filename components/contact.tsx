import Image from "next/image";
import logo from "@/public/aser-images/logo.png";
import {
  Phone,
  Mail,
  Facebook,
  Linkedin,
  Youtube,
  Twitter,
} from "lucide-react";
import { Corner } from "@/components/ui/corner";
import Link from "next/link";

export function Contact() {
  return (
    <section className="lg:px-20 md:px-12 px-8">
      <div className="md:border-x border-white lg:px-16 md:px-10  pt-10 pb-4">
        <div className="flex  md:flex-row flex-col-reverse justify-between md:gap-8 gap-12 pb-5">
          <div className="lg:w-1/3 w-full flex flex-col place-items-center md:block ">
            <Image src={logo} alt="logo" className=""></Image>
            <p className="text-xs leading-3 md:max-w-80 py-8 text-center md:text-start ">
              Yeni Bağlıca Mah. Cambayırı Cad. No:125/2 Etimesgut - Ankara /
              Türkiye
            </p>
            <div className="flex gap-3 items-center ">
              <Phone />
              <p className="text-xs">+90 312 286 0034</p>
            </div>
            <div className="py-8 flex gap-3 items-center">
              <Mail />
              <p className="text-xs">info@aser.com.tr</p>
            </div>
          </div>
          <div className="lg:w-2/3 flex lg:flex-row flex-col md:gap-8 gap-12 ">
            <div className="lg:w-full ">
              <p className="text-xs pb-3">Weekly Newsletter</p>
              <div className=" w-full h-10 bg-[#FF0000] flex items-center relative ">
                <p className="pl-3 font-bold text-xs ">JOIN</p>
                <div className="absolute bottom-0 right-0">
                  <Corner />
                </div>
              </div>
            </div>
            <div className="lg:w-full">
              <p className="text-xs pb-3">
                Reach us! From{" "}
                <Link href={""} className=" text-[#FF0000]">
                  here{" "}
                </Link>{" "}
                or from social medias.
              </p>
              <div className="w-full flex gap-4">
                <Link href="" className="bg-[#FF0000] p-3 relative">
                  <Facebook />
                  <div className="absolute bottom-0 right-0">
                    <Corner />
                  </div>
                </Link>
                <Link href="" className="bg-[#FF0000] p-3 relative">
                  <Twitter />
                  <div className="absolute bottom-0 right-0">
                    <Corner />
                  </div>
                </Link>
                <Link href="" className="bg-[#FF0000] p-3 relative">
                  <Linkedin />
                  <div className="absolute bottom-0 right-0">
                    <Corner />
                  </div>
                </Link>
                <Link href="" className="bg-[#FF0000] p-3 relative">
                  <Youtube />
                  <div className="absolute bottom-0 right-0">
                    <Corner />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col-reverse md:flex-row justify-between gap-8 md:gap-0">
          <p className=" text-xs text-center md:text-start">
            Copyright © 2024 Aser Technology
          </p>
          <div className="flex gap-4 text-xs items-center mx-auto md:mx-0">
            <Link href="">Sitemap</Link>
            <div className="w-1 h-1 rounded-full bg-[#FF0000]"></div>
            <Link href="">Privacy Policy</Link>
            <div className="w-1 h-1 rounded-full bg-[#FF0000]"></div>
            <Link href="">Terms</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
