import React from "react";
import MaxWidthWrapper from "./shared/MaxWidthWrapper";
import Image from "next/image";
import SectionTitle from "./shared/SectionTitle";
import { goals } from "@/data/constants";

export default function OurGoals() {
  return (
    <section className="bg-teal-900/30">
      <MaxWidthWrapper className="py-20">
        <SectionTitle text="Our goals" priColor="500" secColor="900" />
        <div className="flex justify-between items-center">
          <div>
            <ul>
              {goals.map((goal, i) => (
                <li key={i}>{goal.text}</li>
              ))}
            </ul>
          </div>
          <div className="relative flex items-center justify-center h-[400px] aspect-square">
            <Image
              src="/assets/goals.jpg"
              fill
              objectFit="cover"
              alt="vision"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
