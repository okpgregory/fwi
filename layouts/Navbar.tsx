"use client";

import MenuButton from "@/components/MenuButton";
import MobileMenu from "@/components/MobileMenu";
import NavItems from "@/components/NavItems";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { Logo } from "@/components/svgs";
import { useNavbarVisibility } from "@/hooks/useNavbarVisibility";
import { cn } from "@/utils";
import { navVariants } from "@/utils/motion";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CiMenuBurger } from "react-icons/ci";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isNavbarVisible } = useNavbarVisibility(1);

  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={cn("top-0 z-50 sticky inset-x-0 h-24 bg-gradient-to-b", {
        "shadow-md from-blue-950 via-blue-950/60 to-blue-950/30 backdrop-blur-md":
          isNavbarVisible,
        "from-blue-950 via-blue-950 to-blue-950/90 backdrop-blur-md":
          !isNavbarVisible,
      })}
      aria-label="Header"
    >
      <div
        className={cn(
          "relative rounded- transition-all duration-500 ease-in-out bg-gradient-to-b",
          {
            "from-blue-950 via-blue-950/60 to-blue-950/30 backdrop-blur-md":
              isNavbarVisible,
            "from-blue-950 via-blue-950 to-blue-950/90 backdrop-blur-md":
              !isNavbarVisible,
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

              <div className="lg:hidden">
                <Sheet>
                  <SheetTrigger>
                    <CiMenuBurger className="text-3xl text-blue-50" />
                  </SheetTrigger>
                  <SheetContent className="bg-blue-950 border-none text-white">
                    <SheetTitle></SheetTitle>
                    <NavItems mode="mobile" hidden={false} />
                  </SheetContent>
                </Sheet>
              </div>
            </div>

            {/* <MobileMenu isMenuOpen={isMenuOpen} /> */}

            <NavItems />
          </div>
        </MaxWidthWrapper>
      </div>
    </motion.header>
  );
}
