import { ChildrenProps, StringBooleanObjProp } from "@/types";
import { classes } from "@/utils";

export default function H6(
  { children }: ChildrenProps,
  {
    otherStyles,
    optionalStyles,
  }: { otherStyles: string; optionalStyles: StringBooleanObjProp }
) {
  return (
    <h6 className={classes({ styles: "h6", otherStyles, optionalStyles })}>
      {children}
    </h6>
  );
}
