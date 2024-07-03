"use client";
import { siteConfig } from "@/config/site";
import { cn } from "@/utils";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";

function ImageCard({
  index,
  active,
  handleClick,
  image,
  title,
}: {
  index: number;
  active: number;
  handleClick: Dispatch<SetStateAction<number>>;
  title: string;
  image: string;
}) {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 1.75)}
      className={cn(
        "relative flex items-center justify-center min-w-[170px] h-[400px] transition-[flex] duration-[0.7s] ease-out cursor-pointer",
        {
          " lg:flex-[3.5] flex-[10]": active === index,
          "lg:flex-[0.5] flex-[2]": active !== index,
        }
      )}
      onClick={() => handleClick(index)}
    >
      <Image
        src={image}
        alt={title}
        fill
        priority
        objectFit="cover"
        className="absolute w-full h-full rounded-[24px]"
      />
      {active !== index ? (
        <h3 className="font-bold text-lg sm:text-xl text-center text-blue-700 bg-blue-100/60 p-4 rounded-lg shadow-md absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
          {title}
        </h3>
      ) : (
        <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(255,255,255,0.5)] rounded-b-[24px]">
          <h3 className="text-xl sm:text-2xl font-bold text-blue-800 text-center">
            {title}
          </h3>
        </div>
      )}
    </motion.div>
  );
}

export default function ImageSlide() {
  const [active, setActive] = useState<number>(1);

  return (
    <motion.div
      viewport={{ once: true }}
      className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5"
    >
      {siteConfig.gallery.map((image, index) => (
        <ImageCard
          key={image.title}
          {...image}
          index={index}
          active={active}
          handleClick={setActive}
        />
      ))}
    </motion.div>
  );
}
