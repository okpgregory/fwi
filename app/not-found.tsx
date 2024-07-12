import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { LogoOnly } from "@/components/svgs";
import Link from "next/link";

export default async function NotFound() {
  return (
    <MaxWidthWrapper screen className="h-screen flex flex-col items-center">
      <h2 className="h1 text-slate-700 mb-8">Oops!</h2>
      <p className="p text-slate-900 mb-8">Could not find requested resource</p>
      <p className="mb-8">
        View{" "}
        <Link href="/" className="underline">
          Go back home
        </Link>
      </p>
      <Link href="/">
        <LogoOnly className="h-32 text-slate-800" />
      </Link>
    </MaxWidthWrapper>
  );
}
