import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SelectContent } from "@radix-ui/react-select";
import { Label } from "./ui/label";
import { Select, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
function FormSelect({ name, label, defaultValue, options }) {
    return (_jsxs("div", { className: "mb-2 relative", children: [_jsx(Label, { htmlFor: name, className: "capitalize", children: label || name }), _jsx(Select, { defaultValue: defaultValue || options[0], name: name, children: _jsxs(SelectTrigger, { id: name, className: "border p-2 rounded-md w-full", children: [_jsx(SelectValue, {}), _jsx(SelectContent, { className: "bg-white border border-gray-300 rounded-md shadow-lg mt-1 max-h-60 overflow-y-auto", children: options.map((el) => {
                                return (_jsx(SelectItem, { value: el, className: "hover:bg-blue-500 hover:text-white p-2", children: el }, el));
                            }) })] }) })] }));
}
export default FormSelect;
