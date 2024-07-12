import { StatusIcon } from "@/data/constants";
import { Status } from "@/types";
import clsx from "clsx";
import Image from "next/image";

export const StatusBadge = ({ status }: { status: Status }) => {
  const Icon = StatusIcon[status];
  return (
    <div
      className={clsx("flex w-fit items-center gap-2 rounded-full px-4 py-2", {
        "bg-green-600": status === "scheduled",
        "bg-blue-600": status === "pending",
        "bg-red-600": status === "cancelled",
      })}
    >
      {<Icon className="text-sky-50" />}
      <p
        className={clsx(
          "text-[12px] leading-[16px] font-semibold capitalize text-sky-50"
        )}
      >
        {status}
      </p>
    </div>
  );
};
