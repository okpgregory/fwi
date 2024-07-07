import { ChildrenProps, StringBooleanObjProp } from "@/types";
import { classes } from "@/utils";

export default function H5(
  { children }: ChildrenProps,
  {
    otherStyles,
    optionalStyles,
  }: { otherStyles: string; optionalStyles: StringBooleanObjProp }
) {
  return (
    <h5 className={classes({ styles: "h5", otherStyles, optionalStyles })}>
      {children}
    </h5>
  );
}
