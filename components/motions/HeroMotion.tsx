"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import { buttonVariants } from "../ui/button";

export default function HeroMotion() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex flex-col items-center -mb-20 mx-auto py-8 rounded-lg max-w-3xl text-center"
    >
      <h1 className="font-bold text-4xl text-blue-400 sm:text-6xl md:text-7xl tracking-tight">
        On a mission to Heal Wounds.
      </h1>
      <p className="mt-6 max-w-prose text-white text-lg font-medium">
        With high skill and quality wound care practices and education, our goal
        is to improve patient health centered at wound care and improved wound
        outcomes through education of prevention and proper wound care
        practices.
      </p>
      <div className="mt-6">
        <Link href="/patient-referral" className={buttonVariants()}>
          REFER A PATIENT &rarr;
        </Link>
      </div>
    </motion.div>
  );
}
