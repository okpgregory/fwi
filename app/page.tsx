import FAQs from "@/components/FAQs";
import Gallery from "@/components/Gallery";
import HealthInsurances from "@/components/HealthInsurances";
import Hero from "@/components/Hero";
import OurGoals from "@/components/OurGoals";
import OurServices from "@/components/OurServices";
import OurVision from "@/components/OurVision";
import Referral from "@/components/Referral";
import Testimonials from "@/components/Testimonials";
import { FC } from "react";

const Home: FC = () => {
  return (
    <>
      <Hero />
      <OurVision />
      <OurGoals />
      <Gallery />
      <OurServices />
      <HealthInsurances />
      <Referral />
      <Testimonials />
      <FAQs />
    </>
  );
};

export default Home;
