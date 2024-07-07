import { StringBooleanObjProp } from "@/types";
import { clsx, type ClassValue } from "clsx";
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
