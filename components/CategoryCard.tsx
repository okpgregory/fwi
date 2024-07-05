import Link from "next/link";
import React from "react";

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
      className="capitalize h-10 flex items-center px-2 justify-center rounded-lg bg-blue-600"
    >
      <span className="text-sm text-blue-50 whitespace-nowrap font-medium">
        {title}
      </span>
    </Link>
  );
}
