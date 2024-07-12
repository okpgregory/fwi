"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { buttonVariants } from "./ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/utils";

export default function NavItems({
  mode = "desktop",
  hidden = true,
}: {
  mode?: "mobile" | "desktop";
  hidden?: boolean;
}) {
  const pathname = usePathname();

  return (
    <nav
      className={cn("lg:ml-auto lg:block lg:self-stretch", {
        hidden: hidden,
        "h-full": mode === "mobile",
      })}
      aria-label="Main"
    >
      <ul
        className={cn("flex h-full items-center", {
          "gap-4": mode === "desktop",
          "flex-col justify-center gap-8": mode === "mobile",
        })}
      >
        {siteConfig.navItems.map(({ label, href }) => (
          <li key={label}>
            <Link
              href={href}
              className={cn(
                buttonVariants({
                  variant: "ghost",
                  className: "text-blue-50",
                }),
                {
                  "": mode === "desktop",
                  "text-lg": mode === "mobile",
                }
              )}
              aria-current={pathname.includes(href) ? "page" : undefined}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
