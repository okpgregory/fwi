import { ChildrenProps } from "@/types";

export default function MobileNavbarContainer({children}: ChildrenProps) {
  return (
    <div className="flex w-full items-center justify-between lg:w-fit">{children}</div>
  )
}
