import React from "react";

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
  priColor?: colorRange;
  secColor?: colorRange;
};

export default function SectionTitle({
  text,
  priColor = "300",
  secColor = "900",
}: Props) {
  return (
    <div className="flex flex-col items-center txb">
      <span className={`h-16 w-[2px] bg-blue-${priColor}`} aria-hidden="true" />
      <div className="relative w-fit py-8">
        <h2
          className={`text-4xl sm:text-6xl md:text-7xl tracking-wider text-blue-${priColor} font-light w-fit`}
        >
          {text}{" "}
        </h2>
        <span
          className={`absolute left-1/2 -translate-x-1/2 top-1/2 translate-y-0.5 text-blue-${secColor} font-bold tracking-[8px] w-full text-center text-sm`}
        >
          {text.toUpperCase()}
        </span>
      </div>
    </div>
  );
}
