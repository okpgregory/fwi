import { LogoOnly } from "@/components/svgs";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className=" flex h-screen max-h-screen px-[5%]">
      <div className="success-img">
        <Link href="/">
          <LogoOnly />
        </Link>

        <section className="flex flex-col items-center">
          <Image
            src="/assets/gifs/success.gif"
            height={300}
            width={280}
            alt="success"
          />
          <h2 className="header mb-6 max-w-[600px] text-center">
            Patient successfully{" "}
            <span className="text-green-500"> referred!</span>
          </h2>
          <p>
            Someone from our team will be in touch with you as soon as possible!
          </p>
        </section>

        <p className="copyright">
          © {new Date().getFullYear().toString()} FootAndWoundInstitute
        </p>
      </div>
    </div>
  );
}
