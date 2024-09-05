"use client";
 
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteLogos () {
  return (
    <div className="rounded-md pt-10 flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        direction="left"
        speed="normal"
      />
    </div>
  );
}
 