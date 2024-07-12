import Image from "next/image";
import { siteConfig } from "@/config/site";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import SectionTitle from "@/components/shared/SectionTitle";

// const GradientLight = () => {
//   return (
//     <div className="absolute top-0 left-1/4 w-full aspect-square bg-radial-gradient from-blue-600/30 to-blue-600/0 to-70% pointer-events-none" />
//   );
// };

export default function OurServices() {
  return (
    // <section className="bg-gradient-to-tl from-blue-900/20">
    <MaxWidthWrapper className="py-20" id="services">
      <SectionTitle
        text="Our services"
        decStyle="bg-blue-500"
        priStyle="text-blue-500"
        secStyle="text-blue-900"
      />
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 first-line:mt-[30px]">
        {siteConfig.services.map((service) => (
          <div
            key={service.name}
            className="relative aspect-square py-10 px-1 overflow-hidden rounded-md bg-gray-200/70 shadow-md"
          >
            <div className="flex justify-center gap-4 items-center h-full flex-col relative z-10  pointer-events-none">
              <service.icon className="text-blue-900 text-3xl" />
              <h2 className="font-medium text-lg h-14 flex items-center text-center">
                {service.name}
              </h2>
              <p className="text-center text-black/80 text-sm font-medium">
                {service.text}
              </p>
            </div>
            <div className="absolute inset-0 opacity-0 rounded-md transition-opacity hover:opacity-50">
              {service.imageUrl && (
                <Image
                  src={service.imageUrl}
                  alt={service.name}
                  fill
                  className="h-full w-full hover:scale-105 duration-700"
                  objectFit="cover"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
    // </section>
  );
}
