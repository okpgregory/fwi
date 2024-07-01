import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { LogoOnly } from "@/components/svgs";
import { socials } from "@/data/constants";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <section className="bg-blue-950 border-t shadow-md">
      <MaxWidthWrapper className="pt-10 pb-5">
        <div className="container flex flex-col md:flex-row sm:justify-between justify-center items-center gap-6 max-sm:flex-col">
          <Link href="/">
            <LogoOnly className="text-blue-100 h-8 md:h-10 w-auto overflow-visible" />
          </Link>

          <p className="lg:block text-white">
            © {new Date().getFullYear()} Foot and Wound Institute. All rights
            reserved.
          </p>

          <ul className="flex gap-5 flex-wrap">
            {socials.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                target="_blank"
                className="flex items-center justify-center w-10 h-10 text-blue-950 rounded-full transition-colors hover:text-blue-950/80"
              >
                <item.icon className="text-2xl text-white" />
              </Link>
            ))}
          </ul>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
