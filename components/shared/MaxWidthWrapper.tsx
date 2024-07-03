import { cn } from "@/utils";
import { ReactNode } from "react";

type Props = {
  className?: string;
  id?: string;
  children: ReactNode;
};

export default function MaxWidthWrapper({ className, id, children }: Props) {
  return (
    <div
      id={id}
      className={cn("mx-auto w-full max-w-screen-xl px-6 md:px-20", className)}
    >
      {children}
    </div>
  );
}
