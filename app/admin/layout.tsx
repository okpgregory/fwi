import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import Sidebar from "@/app/admin/_components/Sidebar";
import React from "react";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full overflow-hidden">
      <nav className="hidden md:block h-screen w-[20%] fixed">
        <Sidebar />
      </nav>
      <main className="py-16 flex-1 lg:ml-[20%] w-full">
        <MaxWidthWrapper>
          <h1 className="text-5xl font-bold mb-8 text-slate-700">
            Welcome, Admin
          </h1>
          <div className="py-4">{children}</div>
        </MaxWidthWrapper>
      </main>
    </div>
  );
}
