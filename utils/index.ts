import { StringBooleanObjProp, TConstructMetadata } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

// CLIENT SIDE
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const classes = ({
  styles,
  otherStyles,
  optionalStyles,
}: {
  styles: string;
  otherStyles?: string;
  optionalStyles?: StringBooleanObjProp;
}) => cn(styles, otherStyles, optionalStyles);

// SERVER SIDE
export const handleError = (error: unknown) => {
  console.error(error);
  throw new Error(typeof error === "string" ? error : JSON.stringify(error));
};

export function constructMetadata({
  title = "DigiWorld - the online trade center for digital assets",
  description = "DigiWorld is an open-source marketplace for high-quality digital goods.",
  image = "/thumbnail.png",
  icons = "/favicon.ico",
  noIndex = false,
}: TConstructMetadata = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@greghim53lf",
    },
    icons,
    metadataBase: new URL("https://digiworld.up.railway.app"),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
