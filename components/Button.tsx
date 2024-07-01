"use client";
import { ScrollParallax } from "react-just-parallax";
import React from "react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

export default function Button() {
  return (
    <ScrollParallax>
      <div className="mt-6">
        <Link href="/patient-referral" className={buttonVariants()}>
          REFER A PATIENT &rarr;
        </Link>
      </div>
    </ScrollParallax>
  );
}
