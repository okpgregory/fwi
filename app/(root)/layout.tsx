import Footer from "@/components/layout/Footer/Footer";
import Navbar from "@/components/layout/Navbar/Navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="relative flex flex-col">
        <div className="flex-grow flex-1">{children}</div>
      </main>
      <Footer />
    </>
  );
}
