import { FaQuoteLeft } from "react-icons/fa";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";
import SectionTitle from "../shared/SectionTitle";
import P from "../shared/P";

export default function OurVision() {
  return (
    <section className="bg-background" id="our-vision">
      <MaxWidthWrapper className="py-20">
        <div className="grid lg:grid-cols-1">
          <div className="flex flex-col items-center">
            <SectionTitle text="Our vision" />
            <P otherStyles="mx-auto mt-6 text-center max-w-prose text-teal-900/8 italic relative z-10">
              A focused vision to grow an organization of health care
              professionals who provide wound care and healing of wounds to all
              who need proper wound care management. Training skilled health
              care professionals to provide wound care to all individuals at any
              stage of life.{" "}
              <FaQuoteLeft className="text-4xl xl:text-6xl text-blue-200 absolute -top-3 -z-10" />
            </P>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
