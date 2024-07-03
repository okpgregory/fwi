import { cn } from "@/lib/utils";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";

export default function MobileMenu({ isMenuOpen }: { isMenuOpen: boolean }) {
  return (
    <div
      className={cn(
        "fixed inset-0 w-[40vw] z-20 flex h-screen flex-col items-end gap-4 bg-white pr-4 pt-14 transition-transform duration-300 ease-in-out motion-reduce:transition-none lg:hidden",
        {
          "translate-x-[150%]": isMenuOpen,
          "translate-x-[100vw]": !isMenuOpen,
        }
      )}
    >
      <ThemeSwitch className="absolute bottom-6 right-6" />
    </div>
  );
}
