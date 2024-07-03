import { siteConfig } from "@/config/site";
import Footer from "@/layouts/Footer";
import Navbar from "@/layouts/Navbar";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
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
      <body className={cn("relative font-sans antialiased", inter.className)}>
        <Navbar />
        <main className="relative flex flex-col">
          <div className="flex-grow flex-1">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
