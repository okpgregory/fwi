import { StringBooleanObjProp } from "@/types";
import { classes } from "@/utils";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  otherStyles?: string;
  optionalStyles?: StringBooleanObjProp;
};

export default function P({ children, otherStyles, optionalStyles }: Props) {
  return (
    <p
      className={classes({
        styles: "p-regular-24",
        otherStyles,
        optionalStyles,
      })}
    >
      {children}
    </p>
  );
}
