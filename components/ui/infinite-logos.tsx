"use client";
 
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteLogos () {
  return (
    <div className=" bg-[#010101] rounded-md pt-10 flex flex-col antialiased  dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        direction="left"
        speed="normal"
      />
    </div>
  );
}
 