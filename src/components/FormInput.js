import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
function FormInput({ label, name, type, defaultValue }) {
    return (_jsxs("div", { className: "mb-2 capitalize", children: [_jsx(Label, { htmlFor: name, children: label || name }), _jsx(Input, { id: name, name: name, type: type, defaultValue: defaultValue })] }));
}
export default FormInput;
