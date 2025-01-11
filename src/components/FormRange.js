import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Label } from "./ui/label";
import { formatAsDollars } from "@/utils/formatDataAsDollars";
import { Slider } from "./ui/slider";
function FormRange({ label, name, defaultValue }) {
    const step = 100;
    const maxPrice = 100000;
    const defaultPrice = defaultValue ? Number(defaultValue) : maxPrice;
    const [selectedPrice, setSelectedPrice] = useState(defaultPrice);
    return (_jsxs("div", { className: "mb-2 ", children: [_jsxs(Label, { className: "capitalize flex justify-between", htmlFor: name, children: [label || name, _jsx("span", { children: formatAsDollars(selectedPrice) })] }), _jsx(Slider, { className: "mt-4", id: name, name: name, step: step, max: maxPrice, value: [selectedPrice], onValueChange: (value) => setSelectedPrice(value[0]) })] }));
}
export default FormRange;
