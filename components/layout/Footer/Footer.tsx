import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { LogoOnly } from "@/components/svgs";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <section className="bg-slate-800 border-t shadow-md">
      <MaxWidthWrapper className="pt-10 pb-5">
        <div className="container text-white flex items-center py-4 justify-center font-medium border-b border-white">
          <small className="uppercase">
            We are mobile. Services provided between 24-48 after referrals.
          </small>
        </div>
        <div className="container flex flex-col md:flex-row py-4 sm:justify-between justify-center items-center gap-6 max-sm:flex-col">
          <Link href="/">
            <LogoOnly className="text-slate-800 h-8 md:h-10 w-auto overflow-visible" />
          </Link>

          <p className="lg:block text-white">
            © {new Date().getFullYear()} Foot and Wound Institute. All rights
            reserved.
          </p>

          <div className="flex flex-col gap-4 items-center lg:items-start">
            <div className="text-white flex flex-col items-center lg:items-start font-medium gap-4">
              <span>fwi@footandwoundinstitute.com</span>
              <span>708-271-3537</span>
            </div>
            <ul className="flex gap-5 flex-wrap">
              {siteConfig.socials.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  className="flex items-center justify-center w-10 h-10 text-slate-800 rounded-full transition-colors hover:text-slate-800/80"
                >
                  <item.icon className="text-2xl text-white" />
                </a>
              ))}
            </ul>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
