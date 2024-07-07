import { CheckCheck } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";
import SectionTitle from "../shared/SectionTitle";

export default function OurGoals() {
  return (
    <MaxWidthWrapper className="py-20">
      <SectionTitle
        text="Our goals"
        decStyle="bg-blue-500"
        priStyle="text-blue-500"
        secStyle="text-blue-900"
      />
      <div className="flex flex-col-reverse items-center gap-10 md:items-stretch md:flex-row justify-between">
        <div className="min-h-full w-full md:w-1/2">
          <ul className="h-full flex flex-col justify-evenly gap-5">
            {siteConfig.goals.map((goal, i) => (
              <div key={i} className="flex items-center gap-4">
                <CheckCheck className="bg-blue-900/60 text-blue-100 rounded-full text-lg p-1 min-h-8 min-w-8" />
                <li className="text-lg font-medium leading-8">{goal.text}</li>
              </div>
            ))}
          </ul>
        </div>
        <div className="relative w-full md:w-1/3 flex items-center justify-center h-[400px] aspect-square">
          <Image
            src="/assets/goals.jpg"
            priority
            loading="lazy"
            fill
            objectFit="cover"
            alt="vision"
          />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
