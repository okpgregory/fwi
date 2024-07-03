import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Dropdown({
  values,
  onChangeHandler,
  className,
}: {
  values: string[];
  onChangeHandler: () => void;
  className: string;
}) {
  return (
    <Select onValueChange={onChangeHandler}>
      <SelectTrigger className={className}>
        <SelectValue placeholder="Please Select" />
      </SelectTrigger>
      <SelectContent>
        {values.map((value) => (
          <SelectItem
            className="select-item p-regular-14"
            key={value}
            value={value.toLowerCase()}
          >
            {value}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
