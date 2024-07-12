import { cn } from "@/utils";
import { ReactNode } from "react";

type Props = {
  className?: string;
  id?: string;
  children: ReactNode;
  screen?: boolean;
};

export default function MaxWidthWrapper({
  className,
  id,
  children,
  screen,
}: Props) {
  return (
    <div
      id={id}
      className={cn("mx-auto w-full max-w-screen-xl px-6 md:px-20", className, {
        "py-20": screen,
      })}
    >
      {children}
    </div>
  );
}
