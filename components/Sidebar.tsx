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
import { Logo } from "./svgs";
import Link from "next/link";

export default function Sidebar() {
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
          <CommandItem>Dashboard</CommandItem>
          <CommandItem>Blog</CommandItem>
          <CommandItem>Referrals</CommandItem>
          <CommandItem>Testimonials</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup className="text-sky-50" heading="Settings">
          <CommandItem>Logout</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
