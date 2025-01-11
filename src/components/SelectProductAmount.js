import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "./ui/select";
export var Mode;
(function (Mode) {
    Mode["SingleProduct"] = "singleProduct";
    Mode["CartItem"] = "cartItem";
})(Mode || (Mode = {}));
function SelectProductAmount({ mode, amount, setAmount, }) {
    const cartItem = mode === Mode.CartItem;
    return (_jsxs(_Fragment, { children: [_jsx("h4", { className: "font-medium mb-2 ", children: "Amount:" }), _jsx(Select, { defaultValue: amount.toString(), onValueChange: (value) => setAmount(Number(value)), children: _jsxs(SelectTrigger, { className: cartItem ? "w-[75px]" : "w-[150px]", children: [_jsx(SelectValue, { placeholder: amount.toString() }), _jsx(SelectContent, { children: Array.from({ length: cartItem ? Number(amount) + 10 : 10 }).map((el, index) => {
                                const selectValue = (index + 1).toString();
                                return (_jsx(SelectItem, { value: selectValue, children: selectValue }, index));
                            }) })] }) })] }));
}
export default SelectProductAmount;
