import Footer from "@/layouts/Footer";
import Navbar from "@/layouts/Navbar";

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
