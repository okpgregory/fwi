import { ChildrenProps, StringBooleanObjProp } from "@/types";
import { classes } from "@/utils";

export default function H2(
  { children }: ChildrenProps,
  {
    otherStyles,
    optionalStyles,
  }: { otherStyles: string; optionalStyles: StringBooleanObjProp }
) {
  return (
    <h2 className={classes({ styles: "h2", otherStyles, optionalStyles })}>
      {children}
    </h2>
  );
}
