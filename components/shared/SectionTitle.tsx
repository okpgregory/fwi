import { cn } from "@/utils";

type colorRange =
  | "50"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"
  | "950";

type Props = {
  text: string;
  decStyle?: string;
  priStyle?: string;
  secStyle?: string;
};

export default function SectionTitle({
  text,
  decStyle = "bg-blue-300",
  priStyle = "text-blue-300",
  secStyle = "text-blue-900",
}: Props) {
  return (
    <div className="flex flex-col items-center my-5">
      <span className={cn("h-16 w-[2px]", decStyle)} aria-hidden="true" />
      <div className="relative w-fit py-8">
        <h2
          className={cn(
            "text-4xl sm:text-6xl md:text-7xl text-center text-pretty tracking-wider font-light w-fit",
            priStyle
          )}
        >
          {text}{" "}
        </h2>
        <span
          className={cn(
            "absolute left-1/2 -translate-x-1/2 top-1/2 translate-y-0.5 font-bold tracking-[8px] w-full text-center text-sm",
            secStyle
          )}
        >
          {text.toUpperCase()}
        </span>
      </div>
    </div>
  );
}
