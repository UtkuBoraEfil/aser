"use client";

import React, { useRef, useState, useEffect, use } from "react";
import Link from "next/link";

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrambleTextPlugin);
gsap.registerPlugin(ScrollTrigger) ;

export function News () {
    let news = ["27th International Exhibition", "March 14-15"];
    const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);

    useGSAP(()=>{
      titleRefs.current.map((title, index)=>{
        gsap.to(title, {
          scrollTrigger: title,
          duration: 2,
          scrambleText: {
            text: news[index], // this part should be dynamic
            chars: "upperCase", 
            revealDelay: 0.5, 
            speed: 0.2,
          }
        });
      })
    })
  return (
    <div>
        <h1 className="lg:text-3xl text-2xl text-center md:text-left pb-10">Ne<span className="underline underline-offset-[12px] decoration-[#FF0000]">ws</span></h1>
        <ul className="flex flex-col gap-8 h-full">
      {news.map((item, index) => (
        <li key={index}>
            {/* burasi da link olacak */}
            <h1  className="lg:text-3xl md:text-2xl text-[#FF0000] h-full"> [{String(index + 1).padStart(2, '0')}] - <span ref={(el: HTMLHeadingElement | null) => { titleRefs.current[index] = el }}  className=" lg:text-[44px] md:text-3xl underline decoration-[#FF0000]"> </span> </h1>
        </li>
      ))}
    </ul>
    </div>
  );
};
