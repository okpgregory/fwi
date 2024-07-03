"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { buttonVariants } from "./ui/button";
import { usePathname } from "next/navigation";

export default function NavItems() {
  const pathname = usePathname();

  return (
    <nav
      className="hidden lg:ml-auto lg:block lg:self-stretch"
      aria-label="Main"
    >
      <ul className="flex h-full items-center gap-4">
        {siteConfig.navItems.map(({ label, href }) => (
          <li key={label}>
            <Link
              href={href}
              className={buttonVariants({
                variant: "ghost",
                className: "text-blue-50",
              })}
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
