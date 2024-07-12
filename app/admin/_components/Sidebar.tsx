"use client";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Logo } from "../../../components/svgs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils";

export default function Sidebar() {
  const pathname = usePathname();

  const menuLinks = [
    { title: "Dashboard", href: "/admin/dashboard" },
    { title: "Referrals", href: "/admin/referrals" },
    { title: "Blog", href: "/admin/blog" },
    { title: "Testimonials", href: "/admin/tetimonials" },
  ];

  return (
    <Command className="bg-slate-800 rounded-none px-2 py-1">
      <Link href="/">
        <Logo className="p-4 text-blue-100 border-b" />
      </Link>
      <CommandInput
        className="placeholder:text-blue-50 text-sky-50"
        placeholder="Type a command or search..."
      />
      <CommandList>
        <CommandEmpty className="text-sky-50 font-medium">
          No results found.
        </CommandEmpty>
        <CommandGroup className="text-sky-50" heading="Pages">
          {menuLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="cursor-pointer mb-2 block"
            >
              <CommandItem
                className={cn("cursor-pointer", {
                  "font-bold bg-sky-800/20": pathname === link.href,
                })}
              >
                {link.title}
              </CommandItem>
            </Link>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup className="text-sky-50" heading="Settings">
          <CommandItem>Logout</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
