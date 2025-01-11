import { SelectContent } from "@radix-ui/react-select";
import { Label } from "./ui/label";
import { Select, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

type FormSelectProps = {
  name: string;
  label?: string;
  defaultValue?: string;
  options: string[];
};

function FormSelect({ name, label, defaultValue, options }: FormSelectProps) {
  return (
    <div className="mb-2 relative">
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>

      <Select defaultValue={defaultValue || options[0]} name={name}>
        <SelectTrigger id={name} className="border p-2 rounded-md w-full">
          <SelectValue />
          <SelectContent className="bg-white border border-gray-300 rounded-md shadow-lg mt-1 max-h-60 overflow-y-auto">
            {options.map((el) => {
              return (
                <SelectItem
                  key={el}
                  value={el}
                  className="hover:bg-blue-500 hover:text-white p-2"
                >
                  {el}
                </SelectItem>
              );
            })}
          </SelectContent>
        </SelectTrigger>
      </Select>
    </div>
  );
}

export default FormSelect;
