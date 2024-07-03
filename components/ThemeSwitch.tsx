"use client";

import useThemeSwitcher from "@/hooks/useThemeSwitcher";
import { MoonIcon, SunIcon } from "./ui/Icons";
import { cn } from "@/utils";

export default function ThemeSwitch({ className }: { className?: string }) {
  const { theme, toggleTheme } = useThemeSwitcher();

  return (
    <button
      onClick={() => toggleTheme()}
      className={cn(
        `flex items-center justify-center rounded-full p-1 text-teal-50`,
        className
      )}
    >
      {theme === "dark" ? (
        <MoonIcon className="fill-tealtext-teal-50" />
      ) : (
        <SunIcon className="fill-tealtext-teal-50" />
      )}
    </button>
  );
}
