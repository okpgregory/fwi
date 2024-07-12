"use client";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { cn } from "@/utils";
import { useNavbarVisibility } from "@/utils/hooks/useNavbarVisibility";
import { ReactNode } from "react";

export default function NavbarContainer({ children }: { children: ReactNode }) {
  const { isNavbarVisible } = useNavbarVisibility(1);

  return (
    <header
      className={cn("top-0 z-50 sticky inset-x-0 h-24 bg-gradient-to-b", {
        "shadow-md from-background via-background/60 to-background/30 backdrop-blur-md":
          isNavbarVisible,
        "from-background via-background to-background/90 backdrop-blur-md":
          !isNavbarVisible,
      })}
      aria-label="Header"
    >
      <div
        className={cn(
          "relative transition-all duration-500 ease-in-out bg-gradient-to-b",
          {
            "from-background via-background/60 to-background/30 backdrop-blur-md":
              isNavbarVisible,
            "from-background via-background to-background/90 backdrop-blur-md":
              !isNavbarVisible,
          }
        )}
      >
        <MaxWidthWrapper>
          <div className="flex items-center h-24">{children}</div>
        </MaxWidthWrapper>
      </div>
    </header>
  );
}
