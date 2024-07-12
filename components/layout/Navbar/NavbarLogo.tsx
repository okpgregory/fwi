import { Logo } from "@/components/svgs";
import Link from "next/link";

export default function NavbarLogo() {
  return (
    <div className="flex">
      <Link href="/">
        <Logo className="h-14 md:h-16 overflow-visible text-[#DBEAFE]" />
      </Link>
    </div>
  );
}
