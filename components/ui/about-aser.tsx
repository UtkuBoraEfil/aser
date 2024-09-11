import React, { useRef, useState, useEffect, use } from "react";
import { AboutCorner } from "./about-corner";

export function AboutAser() {

  return (
    <>
        <h1 className="lg:text-3xl text-2xl pb-10 text-center md:text-start">
          About Aser Techno
          <span className="underline underline-offset-[12px] decoration-[#FF0000]">
            logy
          </span>
        </h1>
        <div className="w-full bg-about-image-1 bg-cover bg-no-repeat bg-center md:px-10 px-5 pb-3 h-[360px] grid md:content-end content-center relative">
          <p className=" lg:text-2xl md:text-xl lg:pr-40 md:pr-12 font-bold leading-8">
            ASER was established in 2005 with the national/domestic product and
            technology mission based on past high technological product
            experiences and it serves on behalf of providing...
          </p>
          <div className="absolute bottom-0 right-0 w-fit">
            <AboutCorner />
          </div>
        </div>
    </>

  );
}
