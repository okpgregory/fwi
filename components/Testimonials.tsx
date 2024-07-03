"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import SectionTitle from "@/components/shared/SectionTitle";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { Navigation, Pagination } from "swiper/modules";
import { siteConfig } from "@/config/site";

export default function Testimonials() {
  return (
    <MaxWidthWrapper className="flex h-full items-center justify-center py-20">
      <div className="h-full w-full">
        <SectionTitle text="Testimonials" />
        <Swiper
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
          className="h-[400px]"
        >
          {siteConfig.testimonials.map((person, index) => (
            <SwiperSlide key={index}>
              <div className="flex h-full flex-col items-center gap-x-8 px-16 md:flex-row">
                <div className="relative mx-auto mb-4 flex w-full max-w-[300px] flex-col items-center md:mb-0 xl:mx-0 xl:justify-center">
                  <div className="flex flex-col justify-center text-center">
                    <div className="mx-auto mb-2">
                      <Image
                        src={person.image}
                        width={100}
                        height={100}
                        alt=""
                        objectFit="cover"
                        className="h-[100px] w-[100px] rounded-full object-cover"
                      />
                    </div>
                    <h5 className="text-lg font-bold">{person.name}</h5>
                    <h6 className="text-lg uppercase font-medium tracking-widest text-black/70">
                      {person.position}
                    </h6>
                  </div>
                </div>
                <div className="relative flex-1 flex-col justify-center before:w-[1px] xl:pl-20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] xl:before:bg-primary/20">
                  <div className="mb-4">
                    <FaQuoteLeft className="mx-auto text-4xl text-primary/20 md:mx-0 xl:text-6xl" />
                  </div>
                  <p className="leading-8 text-center font-medium md:text-left xl:text-lg text-black/90">
                    {person.message}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </MaxWidthWrapper>
  );
}
