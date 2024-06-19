import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { Book, Caravan, Glasses, Globe, Map } from "lucide-react";
import Link from "next/link";

const goals = [
  {
    topic: "Nationwide Reach",
    text: "Nationwide provision of wound care to all individuals in need of wound care services",
    icon: Map,
  },
  {
    topic: "Raising Awareness",
    text: "Wound healing and prevention care education",
    icon: Book,
  },
  {
    topic: "",
    text: "Skilled mobile wound care service that is caring and brings comfort to patients",
    icon: Caravan,
  },
  {
    topic: "Top Professionals",
    text: "Elite skilled health care professionals who train and treat wounds",
    icon: Glasses,
  },
  {
    topic: "",
    text: "Global wound care training and professional development Focused on wound care",
    icon: Globe,
  },
];

export default function Home() {
  return (
    <>
      <div className="bg-[url(/assets/hero/hero-bg.png)] bg-cover bg-no-repeat bg-center h-screen">
        <MaxWidthWrapper className="flex flex-col justify-end items-center pb-16 h-full">
          <div className="flex flex-col items-center bg-background/80 mx-auto py-8 rounded-lg max-w-3xl text-center">
            <h1 className="font-bold text-4xl text-teal-900 sm:text-6xl tracking-tight">
              On a mission to Heal Wounds.
            </h1>
            <p className="mt-6 max-w-prose text-gray-700 text-lg">
              With high skill and quality wound care practices and education,
              our goal is to improve patient health centered at wound care and
              improved wound outcomes through education of prevention and proper
              wound care practices.
            </p>
            <div className="mt-6">
              <Link href="/patient-referral" className={buttonVariants()}>
                REFER A PATIENT &rarr;
              </Link>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      <section className="border-gray-200 bg-primary border-t">
        <MaxWidthWrapper className="py-20">
          <div className="text-center">
            <h2 className="font-bold text-2xl text-background sm:text-4xl tracking-tight">
              Our Vision
            </h2>
            <p className="mx-auto mt-6 max-w-prose text-background/80 text-lg">
              A focused vision to grow an organization of health care
              professionals who provide wound care and healing of wounds to all
              who need proper wound care management. Training skilled health
              care professionals to provide wound care to all individuals at any
              stage of life.{" "}
            </p>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
