"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import referance1 from "@/public/aser-images/references/United-Nations.png"
import referance2 from "@/public/aser-images/references/aselsan.png"
import referance3 from "@/public/aser-images/references/euas.png"
import referance4 from "@/public/aser-images/references/gaziantep-buyuksehir-belediyesi.png"
import referance5 from "@/public/aser-images/references/hidromek.png"
import referance6 from "@/public/aser-images/references/insansiz-demiryolu-en.png"
import referance7 from "@/public/aser-images/references/insansiz-demiryolu.png"
import referance8 from "@/public/aser-images/references/link.png"
import referance9 from "@/public/aser-images/references/saglik-bakanligi.png"
import referance10 from "@/public/aser-images/references/sanko.png"
import referance11 from "@/public/aser-images/references/sc.png"
import referance12 from "@/public/aser-images/references/tcdd-logo.png"
import referance13 from "@/public/aser-images/references/thaf.png"
import referance14 from "@/public/aser-images/references/tpo.png"
import referance15 from "@/public/aser-images/references/tubitak.png"
import referance16 from "@/public/aser-images/references/tuvasac.png"
import referance17 from "@/public/aser-images/references/uluso.png"

export const InfiniteMovingCards = ({
  direction = "left",
  speed = "fast",
  className,
}: {
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const references = [referance1, referance2, referance3, referance4, referance5, referance6, referance7, referance8, referance9, referance10, referance11, referance12, referance13, referance14, referance15, referance16, referance17]
  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "right") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        " relative z-20  max-w-7xl overflow-hidden",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex  shrink-0 gap-4 py-4 flex-nowrap h-40 items-center justify-center",
          start && "animate-scroll "
        )}
      >
        {references.map((referance, idx) => (
          <li
            className=" min-w-[150px] h-[50px]  object-contain flex flex-col items-center justify-center"
            key={idx}
          > 
            <Image src={referance} className=" object-contain max-h-[50px] filter grayscale"  alt="references"/>
          </li>
        ))}
      </ul>
    </div>
  );
};
