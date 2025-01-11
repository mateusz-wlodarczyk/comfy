import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { formatAsDollars } from "@/utils/formatDataAsDollars";
import { Separator } from "./ui/separator";
import { useAppSelector } from "@/hooks";
import { Card, CardTitle } from "./ui/card";
function CartTotal() {
    const { cartTotal, shipping, tax, orderTotal } = useAppSelector((state) => state.cartState);
    return (_jsxs(Card, { className: "p-8 bg-muted", children: [_jsx(CartTotalRow, { label: "Subtotal", amount: cartTotal }), _jsx(CartTotalRow, { label: "Shipping", amount: shipping }), _jsx(CartTotalRow, { label: "Tax", amount: tax }), _jsx(CardTitle, { className: "mt-8", children: _jsx(CartTotalRow, { label: "Order Total", amount: orderTotal, lastRow: true }) }), " "] }));
}
export default CartTotal;
function CartTotalRow({ label, amount, lastRow, }) {
    return (_jsxs(_Fragment, { children: [_jsxs("p", { className: "flex justify-between text-sm p-2", children: [_jsx("span", { children: label }), _jsx("span", { children: formatAsDollars(amount) })] }), lastRow ? null : _jsx(Separator, {})] }));
}
