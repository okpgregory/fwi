"use client";

import MenuButton from "@/components/MenuButton";
import MobileMenu from "@/components/MobileMenu";
import NavItems from "@/components/NavItems";
import ThemeSwitch from "@/components/ThemeSwitch";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { Logo } from "@/components/svgs";
import { useNavbarVisibility } from "@/hooks/useNavbarVisibility";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isNavbarVisible } = useNavbarVisibility(1);

  return (
    <header
      className={cn("top-0 z-50 sticky inset-x-0 bg-white h-20", {
        "bg-white/45 shadow-md backdrop-blur-md": isNavbarVisible,
      })}
      aria-label="Header"
    >
      <div
        className={cn("relative bg-white", {
          "bg-white/45 backdrop-blur-md": isNavbarVisible,
        })}
      >
        <MaxWidthWrapper>
          <div className="border-gray-200 border-b">
            <div className="flex items-center h-20">
              <div className="flex w-full items-center justify-between lg:w-fit">
                {/* LOGO */}
                <div className="flex z-30" onClick={() => setIsMenuOpen(false)}>
                  <Link href="/">
                    <Logo className="h-14 w-auto overflow-visible" />
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

              <span
                className="h-6 w-px bg-black mx-6 hidden lg:block"
                aria-hidden="true"
              />

              <ThemeSwitch className="hidden lg:block" />
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </header>
  );
}
