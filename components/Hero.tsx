import React from "react";
import MaxWidthWrapper from "./shared/MaxWidthWrapper";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

export default function Hero() {
  return (
    <div className="bg-[url(/assets/hero/2.jpg)] bg-cover bg-no-repeat bg-center h-screen">
      <div className=" bg-gradient-to-b from-black/90 to-gray-600/40 h-full">
        <MaxWidthWrapper className="flex flex-col justify-center items-center h-full">
          <div className="flex flex-col items-center -mb-20 mx-auto py-8 rounded-lg max-w-3xl text-center">
            <h1 className="font-bold text-4xl text-blue-400 sm:text-6xl md:text-7xl tracking-tight">
              On a mission to Heal Wounds.
            </h1>
            <p className="mt-6 max-w-prose text-white text-lg font-medium">
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
    </div>
  );
}

// import React from "react";
// import Image from "next/image";

// export default function Hero() {
//   return (
//     <MaxWidthWrapper className="h-screen">
//       <div className="border flex h-full items-center pt-16 justify-between">
//         <div>
//           <h1 className="font-bold text-4xl text-teal-900 sm:text-6xl tracking-tight">
//             On a mission to Heal Wounds.
//           </h1>
//           <p className="mt-6 max-w-prose text-gray-700 text-lg font-medium">
//             With high skill and quality wound care practices and education, our
//             goal is to improve patient health centered at wound care and
//             improved wound outcomes through education of prevention and proper
//             wound care practices.
//           </p>
//           <div className="mt-6">
//             <Link href="/patient-referral" className={buttonVariants()}>
//               REFER A PATIENT &rarr;
//             </Link>
//           </div>
//         </div>
//         <div className="relative h-full w-full flex justify-center items-center">
//           <Image
//             src="/assets/hero/hero-g.png"
//             alt="hero personnel"
//             fill
//             objectFit="contain"
//           />
//         </div>
//       </div>
//     </MaxWidthWrapper>
//   );
// }
