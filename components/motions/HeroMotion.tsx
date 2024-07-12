"use client";

import { fadeIn, staggerContainer, textVariant } from "@/utils/motion";
import { motion } from "framer-motion";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

export default function HeroMotion() {
  return (
    <motion.div
      viewport={{ once: true }}
      className="flex flex-col items-center mx-auto py-8 -mt-20 rounded-lg text-center w-banner-container"
    >
      <h1 className="h1-bold text-blue-500">
        On a mission
        <br />
        to Heal Wounds.
      </h1>
      <p className="p-regular-20 mt-6 max-w-prose text-blue-300">
        With high skill and quality wound care practices and education, our goal
        is to improve patient health centered at wound care and improved wound
        outcomes through education of prevention and proper wound care
        practices.
      </p>
      <motion.div variants={fadeIn("up", "tween", 0.8, 1)} className="mt-6">
        <Link href="/referral" className={buttonVariants()}>
          REFER A PATIENT &rarr;
        </Link>
      </motion.div>
    </motion.div>
  );
}
