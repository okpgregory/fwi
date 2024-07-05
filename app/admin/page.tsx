import Categories from "@/components/Categories";
import CategoryAdder from "@/components/CategoryAdder";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import Sidebar from "@/components/Sidebar";
import React, { ReactNode } from "react";

export default function page({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className="flex">
        <div className="hidden md:block h-screen w-[300px]">
          <Sidebar />
        </div>
        <MaxWidthWrapper>
          <CategoryAdder />
          <Categories />
        </MaxWidthWrapper>
      </div>
    </div>
  );
}
