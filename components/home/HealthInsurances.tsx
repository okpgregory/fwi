import Image from "next/image";
import { siteConfig } from "@/config/site";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";

export default function HealthInsurances() {
  return (
    <MaxWidthWrapper className="py-20">
      <div>
        <div>
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {siteConfig.healthInsurances.map((insurance) => (
              <li
                key={insurance.name}
                className="relative bg-blue-300/10 h-14 rounded-lg py-10 px-4"
              >
                <Image
                  src={insurance.image}
                  alt={insurance.image}
                  fill
                  objectFit="contain"
                  className="py-2"
                  priority
                  loading="lazy"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
