"use client";

import { fadeIn, staggerContainer, textVariant } from "@/lib/motion";
import { motion } from "framer-motion";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

export default function HeroMotion() {
  return (
    <motion.div
      viewport={{ once: true }}
      className="flex flex-col items-center -mb-20 mx-auto py-8 rounded-lg max-w-3xl text-center"
    >
      <motion.h1
        variants={textVariant(0.6)}
        className="font-bold text-4xl text-blue-400 sm:text-6xl md:text-7xl tracking-tight"
      >
        On a mission to Heal Wounds.
      </motion.h1>
      <motion.p
        variants={textVariant(0.7)}
        className="mt-6 max-w-prose text-white text-lg leading-8 font-medium"
      >
        With high skill and quality wound care practices and education, our goal
        is to improve patient health centered at wound care and improved wound
        outcomes through education of prevention and proper wound care
        practices.
      </motion.p>
      <motion.div variants={fadeIn("up", "tween", 0.8, 1)} className="mt-6">
        <Link href="#referral" className={buttonVariants()}>
          REFER A PATIENT &rarr;
        </Link>
      </motion.div>
    </motion.div>
  );
}
