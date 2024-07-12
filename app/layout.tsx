import "@/styles/globals.css";
import { cn } from "@/utils";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({ subsets: ["latin"], variable: "--workSans" });

export const metadata: Metadata = {
  title: {
    template: `%s | ${process.env.APP_NAME}`,
    default: `${process.env.APP_NAME}`,
  },
  description: `${process.env.APP_DESC}`,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body
        className={cn(
          "font-workSans min-h-screen bg-blue-50 antialiased",
          workSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
