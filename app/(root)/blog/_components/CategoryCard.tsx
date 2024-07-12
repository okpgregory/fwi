import { badgeVariants } from "@/components/ui/badge";
import { cn } from "@/utils";
import Link from "next/link";

export default function CategoryCard({
  title,
  link,
}: {
  title: string;
  link: string;
}) {
  return (
    <Link
      href={link}
      className={cn(
        "",
        badgeVariants({
          className: "bg-blue-600 hover:bg-blue-500 w-fit whitespace-nowrap",
        })
      )}
    >
      {title}
    </Link>
  );
}
