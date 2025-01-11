import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
function FormCheckbox({ name, label, defaultValue }) {
    const defaultChecked = defaultValue === "on" ? true : false;
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "mb-2 flex justify-between self-end", children: [_jsx(Label, { htmlFor: name, className: "capitalize", children: label || name }), _jsx(Checkbox, { id: name, name: name, defaultChecked: defaultChecked })] }) }));
}
export default FormCheckbox;
