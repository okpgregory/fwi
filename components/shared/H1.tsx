import { StringBooleanObjProp } from "@/types";
import { classes } from "@/utils";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  otherStyles?: string;
  optionalStyles?: StringBooleanObjProp;
};

export default function H1({ children, otherStyles, optionalStyles }: Props) {
  return (
    <h1 className={classes({ styles: "h1-bold", otherStyles, optionalStyles })}>
      {children}
    </h1>
  );
}
