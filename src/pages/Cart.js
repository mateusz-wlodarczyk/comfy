import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { SectionTitle } from "@/components";
import CartItemList from "@/components/CartItemList";
import CartTotal from "@/components/CartTotal";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/hooks";
import { Link } from "react-router-dom";
function Cart() {
    const user = useAppSelector((state) => state.userState.user);
    const numItemsInCart = useAppSelector((state) => state.cartState.numItemsInCart);
    if (numItemsInCart === 0) {
        return _jsx(SectionTitle, { text: "empty cart" });
    }
    return (_jsxs(_Fragment, { children: [_jsx(SectionTitle, { text: "shopping cart" }), _jsxs("div", { className: "mt-8 grid gap-8 lg:grid-cols-12", children: [_jsx("div", { className: "lg:col-span-8", children: _jsx(CartItemList, {}) }), _jsxs("div", { className: "lg:col-span-4 lg:pl-4", children: [_jsx(CartTotal, {}), " ", _jsx(Button, { asChild: true, className: "mt-8 w-full", children: user ? (_jsx(Link, { to: "/checkout", children: "proceed to checkout" })) : (_jsx(Link, { to: "/login", children: "please login" })) })] })] })] }));
}
export default Cart;
