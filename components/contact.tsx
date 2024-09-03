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
    <section className="px-20">
      <div className="border-x border-white px-16 pt-10 pb-4">
        <div className="flex justify-between gap-8 pb-5">
            <div className="w-full">
            <Image src={logo} alt="logo" className=""></Image>
            <p className="text-xs leading-3 max-w-80 py-8">
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
            <div className="w-full">
            <p className="text-xs pb-3">Weekly Newsletter</p>
            <div className=" w-full h-10 bg-[#FF0000] flex items-center relative ">
                <p className="pl-3 font-bold text-xs ">JOIN</p>
                <div className="absolute bottom-0 right-0">
                <Corner />
                </div>
            </div>
            </div>
            <div className="w-full">
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
        <div className="w-full flex justify-between">
            <p className=" text-xs ">Copyright © 2024 Aser Technology</p>
            <div className="flex gap-4 text-xs items-center">
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
