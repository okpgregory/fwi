import { services } from "@/data/constants";
import MaxWidthWrapper from "./shared/MaxWidthWrapper";
import SectionTitle from "./shared/SectionTitle";
import Image from "next/image";
import ClipPath from "./svgs/ClipPath";
import { cn } from "@/lib/utils";

const GradientLight = () => {
  return (
    <div className="absolute top-0 left-1/4 w-full aspect-square bg-radial-gradient from-blue-600/30 to-blue-600/0 to-70% pointer-events-none" />
  );
};

export default function OurServices() {
  return (
    // <section className="bg-gradient-to-tl from-blue-900/20">
    <MaxWidthWrapper className="py-20">
      <SectionTitle
        text="Our services"
        decStyle="bg-blue-500"
        priStyle="text-blue-500"
        secStyle="text-blue-900"
      />
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 first-line:mt-[30px]">
        {services.map((service) => (
          <div
            key={service.name}
            className="relative aspect-square py-10 px-1 overflow-hidden rounded-md bg-gray-200/70 shadow-md"
          >
            <div className="flex justify-center gap-4 items-center h-full flex-col relative z-10  pointer-events-none">
              <service.icon className="text-blue-900 text-3xl" />
              <h2 className="font-medium text-lg h-14 flex items-center text-center">
                {service.name}
              </h2>
              <p className="text-center text-black/80 leading-8 text-md font-medium">
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

{
  /* <div className="grid md:grid-cols-3 gap-10 mb-10">
        {services.map((service, index) => (
          <div
            className={cn(
              "block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-{24rem}",
              {
                "col-span-2":
                  index === 0 || index === 3 || index === 4 || index === 7,
              }
            )}
            style={{ backgroundImage: `url(${service.backgroundUrl})` }}
            key={service.name}
          >
            <div className="relative z-10 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
              <h5 className="mb-5 font-medium">{service.name}</h5>
              <p className="max-w-60">{service.text}</p>
            </div>
            {service.light && <GradientLight />}

            <div
              className="absolute z-0 inset-0.5 bg-black/10"
              style={{ clipPath: "url(#benefits)" }}
            >
              <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-50">
                {service.imageUrl && (
                  <Image
                    src={service.imageUrl}
                    alt={service.name}
                    fill
                    className="h-full w-full"
                    objectFit="cover"
                  />
                )}
              </div>
            </div>
            <ClipPath />
          </div>
        ))}
      </div> */
}
