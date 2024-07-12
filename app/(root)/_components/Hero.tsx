import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-hero bg-cover bg-no-repeat bg-center h-screen">
      <div className="bg-gradient-to-b from-black/90 to-gray-600/40 h-full">
        <MaxWidthWrapper className="flex flex-col justify-center items-center h-full">
          <div className="flex flex-col items-center mx-auto py-8 -mt-20 rounded-lg text-center w-banner-container">
            <h1 className="h1 text-blue-600 px-4 py-2 rounded-tl-2xl rounded-br-2xl">
              On a mission
              <br />
              to Heal Wounds.
            </h1>
            <p className="p mt-1 max-w-[800px] text-blue-50 px-8 py-4">
              With high skill and quality wound care practices and education,
              our goal is to improve patient health centered at wound care and
              improved wound outcomes through education of prevention and proper
              wound care practices.
            </p>
            <div className="mt-1">
              <Link href="/referral" className={buttonVariants()}>
                REFER A PATIENT
              </Link>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  );
}
