import { ChildrenProps, StringBooleanObjProp } from "@/types";
import { classes } from "@/utils";

export default function H3(
  { children }: ChildrenProps,
  {
    otherStyles,
    optionalStyles,
  }: { otherStyles: string; optionalStyles: StringBooleanObjProp }
) {
  return (
    <h3 className={classes({ styles: "h3", otherStyles, optionalStyles })}>
      {children}
    </h3>
  );
}
