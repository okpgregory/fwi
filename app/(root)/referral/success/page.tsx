import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <MaxWidthWrapper screen>
      <div>
        <section className="flex flex-col gap-4 items-center">
          <Image
            src="/assets/gifs/success.gif"
            height={300}
            width={280}
            alt="success"
          />
          <h2 className="header mb-6 max-w-[600px] text-center text-xl">
            Patient successfully{" "}
            <span className="text-green-500"> referred!</span>
          </h2>
          <p className="tracking-widest text-center border-4 rounded-md max-w-[400px] p-4 border-emerald-500 leading-10 uppercase text-blue-800 text-2xl">
            Someone from our team will be in touch with you as soon as possible!
          </p>

          <p>
            Go to{" "}
            <Link
              href="/"
              className="text-blue-800 underline hover:text-background/90"
            >
              home Page
            </Link>
          </p>
        </section>
      </div>
    </MaxWidthWrapper>
  );
}
