import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

export default function Featured() {
  return (
    <div className="mt-8">
      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold ">
        <b>Step into Recovery:</b> Insights from the Foot Wound Institute.
      </h1>
      <div className="mt-16 flex items-center gap-12">
        <div className="flex-1 h-[500px] relative">
          <Image
            src="/assets/blog/blog.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col gap-5">
          <h2 className="text-4xl">
            Lorem ipsum dolor sit amet alim consectetur adipisicing elit.
          </h2>
          <p className="text-xl font-light text-blue-700/80">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.
          </p>
          <Button>Read More</Button>
        </div>
      </div>
    </div>
  );
}
