import { FC } from "react";
import Hero from "./_components/Hero";
import OurVision from "./_components/OurVision";
import OurGoals from "./_components/OurGoals";
import Gallery from "./_components/Gallery";
import OurServices from "./_components/OurServices";
import HealthInsurances from "./_components/HealthInsurances";
import Referral from "./_components/Referral";
import Testimonials from "./_components/Testimonials";
import FAQs from "./_components/FAQs";

const HomePage: FC = () => {
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

export default HomePage;
