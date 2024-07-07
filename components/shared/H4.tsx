import { ChildrenProps, StringBooleanObjProp } from "@/types";
import { classes } from "@/utils";

export default function H4(
  { children }: ChildrenProps,
  {
    otherStyles,
    optionalStyles,
  }: { otherStyles: string; optionalStyles: StringBooleanObjProp }
) {
  return (
    <h4 className={classes({ styles: "h4", otherStyles, optionalStyles })}>
      {children}
    </h4>
  );
}
