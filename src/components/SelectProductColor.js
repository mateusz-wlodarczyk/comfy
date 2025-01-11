import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function SelectProductColor({ colors, productColor, setProductColor, }) {
    return (_jsxs("div", { className: "mt-6  ", children: [_jsx("h4", { className: "text-md font-medium tracking-wider capitalize", children: "colors" }), _jsx("div", { className: "mt-2", children: colors.map((color) => {
                    return (_jsx("button", { type: "button", className: `rounded-full mr-2 w-6 h-6 border-2 ${color === productColor && "border-primary"}`, style: { backgroundColor: color }, onClick: () => setProductColor(color) }, color));
                }) })] }));
}
export default SelectProductColor;
