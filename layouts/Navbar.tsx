"use client";

import MenuButton from "@/components/MenuButton";
import MobileMenu from "@/components/MobileMenu";
import NavItems from "@/components/NavItems";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { Logo } from "@/components/svgs";
import { useNavbarVisibility } from "@/hooks/useNavbarVisibility";
import { cn } from "@/lib/utils";
import { navVariants } from "@/utils/motion";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isNavbarVisible } = useNavbarVisibility(1);

  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={cn(
        "top-0 z-50 fixed inset-x-0 h-24 rounded-bl-sm rounded-br-sm",
        {
          "shadow-md bg-gradient-to-b from-blue-950 via-blue-950/60 to-blue-950/30 backdrop-blur-md":
            isNavbarVisible,
        }
      )}
      aria-label="Header"
    >
      <div
        className={cn(
          "relative rounded- transition-all duration-500 ease-in-out rounded-bl-sm rounded-br-sm",
          {
            "bg-gradient-to-b from-blue-950 via-blue-950/60 to-blue-950/30 backdrop-blur-md":
              isNavbarVisible,
          }
        )}
      >
        <MaxWidthWrapper>
          <div className="flex items-center h-24">
            <div className="flex w-full items-center justify-between lg:w-fit">
              {/* LOGO */}
              <div className="flex z-30" onClick={() => setIsMenuOpen(false)}>
                <Link href="/">
                  <Logo className="text-blue-100 h-14 md:h-16 w-auto overflow-visible" />
                </Link>
              </div>

              <MenuButton
                isOpen={isMenuOpen}
                setIsOpen={() => setIsMenuOpen(!isMenuOpen)}
                className="relative z-30 h-[30px] w-[30px] rounded-sm shadow-2xl lg:hidden"
              />
            </div>

            <MobileMenu isMenuOpen={isMenuOpen} />

            <NavItems />

            {/* <span
              className="h-6 w-px bg-teal-300 mx-6 hidden lg:block"
              aria-hidden="true"
            />

            <ThemeSwitch className="hidden lg:block" /> */}
          </div>
        </MaxWidthWrapper>
      </div>
    </motion.header>
  );
}
