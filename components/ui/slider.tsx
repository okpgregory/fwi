"use client";

import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";

import { gallery } from "@/data/constants";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function SliderOne() {
  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isSmallScreen = useMediaQuery({ minWidth: 767 });

  const settings = {
    arrows: false,
    infinite: true,
    slideToShow: 3,
    autoPlay: true,
    speed: 4000,
    autoplaySpeed: 1000,
    className: "w-full mx-auto flex cursor-pointer center-mode",
  };

  if (isMediumScreen) {
    settings.slideToShow = 1.67;
  } else if (isSmallScreen) {
    settings.slideToShow = 1;
  }

  const images = gallery.map((image, i) => (
    <div key={i} className="rounded-md px-2 md:p-10 w-fit">
      <Image
        priority
        src={image.image}
        alt=""
        width={500}
        height={500}
        className="rounded-2xl"
      />
    </div>
  ));

  return (
    <div>
      <Slider {...settings}>
        <>
          <div className="relative h-[300px] w-[600px] rounded-md px-2 md:p-10">
            <Image
              priority
              src="/assets/gallery/clean-wound-wraps.jpg"
              alt="clean wound wraps"
              fill
              objectFit="cover"
              className="rounded-2xl"
            />
          </div>
        </>
        <>
          <div className="relative h-[300px] w-[600px] rounded-md px-2 md:p-10">
            <Image
              priority
              src="/assets/gallery/debridement-of-wound.jpg"
              alt="clean wound wraps"
              fill
              objectFit="cover"
              className="rounded-2xl"
            />
          </div>
        </>
      </Slider>
    </div>
  );
}
