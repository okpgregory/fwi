import { cn } from "@/utils";
import React from "react";
import { IconType } from "react-icons/lib";

type Props = {
  type: "appointments" | "pending" | "cancelled";
  count: number;
  label: string;
  Icon: IconType;
  iconColor: string;
};

const StatCard = ({ type, Icon, count, label, iconColor }: Props) => {
  return (
    <div className="bg-slate-800/30 rounded-2xl">
      <div
        className={cn(
          "flex flex-1 flex-col gap-4 rounded-2xl bg-cover p-6 shadow-lg",
          {
            "bg-appointments": type === "appointments",
            "bg-pending": type === "pending",
            "bg-cancelled": type === "cancelled",
          }
        )}
      >
        <div className="flex items-center gap-4">
          <Icon className={cn("text-3xl", iconColor)} />
          <h2 className={cn("font-bold text-3xl", iconColor)}>{count}</h2>
        </div>
        <p className="text-lg font-medium text-slate-800">{label}</p>
      </div>
    </div>
  );
};

export default StatCard;
