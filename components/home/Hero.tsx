import React from "react";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";
import HeroMotion from "../motions/HeroMotion";

export default function Hero() {
  return (
    <div className="bg-[url(/assets/hero/2.jpg)] bg-cover bg-no-repeat bg-center h-screen">
      <div className=" bg-gradient-to-b from-black/90 to-gray-600/40 h-full">
        <MaxWidthWrapper className="flex flex-col justify-center items-center h-full">
          <HeroMotion />
        </MaxWidthWrapper>
      </div>
    </div>
  );
}
