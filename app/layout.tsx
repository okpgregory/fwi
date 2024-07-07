import { siteConfig } from "@/config/site";
import "@/styles/globals.css";
import { cn } from "@/utils";
import type { Metadata } from "next";
import { Fjalla_One } from "next/font/google";

const inter = Fjalla_One({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: { default: siteConfig.name, template: `%s - ${siteConfig.name}` },
  description: siteConfig.description,
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
          "relative font-sans antialiased bg-slate-500/10",
          inter.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
