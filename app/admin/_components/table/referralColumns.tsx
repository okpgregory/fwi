"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { StatusBadge } from "./StatusBadge";
import { IReferral } from "@/lib/database/models/Referral";

export const referralColumns: ColumnDef<IReferral>[] = [
  {
    header: "#",
    cell: ({ row }) => {
      return (
        <p className="text-[14px] leading-[18px] font-medium">
          {row.index + 1}.
        </p>
      );
    },
  },
  {
    accessorKey: "patientName",
    header: "Patient",
    cell: ({ row }) => {
      const referral = row.original;
      return (
        <p className="text-[14px] leading-[18px] font-medium">
          {referral.patientName.firstName} {referral.patientName.lastName}
        </p>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const referral = row.original;
      return (
        <div className="min-w-[115px]">
          <StatusBadge status={referral.status} />
        </div>
      );
    },
  },
  {
    accessorKey: "patientEmail",
    header: "Email",
    cell: ({ row }) => {
      const referral = row.original;
      return (
        <p className="text-[14px] leading-[18px] font-medium min-w-[100px]">
          {referral.patientEmail}
        </p>
      );
    },
  },
  {
    id: "actions",
    header: () => <div className="pl-4">Actions</div>,
    cell: ({ row }) => {
      const referral = row.original;

      return (
        <div className="flex gap-1">
          <Button>Edit</Button>
          <Button className="bg-red-500 hover:bg-red-500/50">Delete</Button>
        </div>
      );
    },
  },
];
