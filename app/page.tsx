import Hero from "@/components/Hero";
import OurGoals from "@/components/OurGoals";
import OurVision from "@/components/OurVision";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <OurVision />
      <OurGoals />
    </>
  );
}
