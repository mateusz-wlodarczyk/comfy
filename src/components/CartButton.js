import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { useAppSelector } from "@/hooks";
function CartButton() {
    const numItemInCart = useAppSelector((state) => state.cartState.numItemsInCart);
    return (_jsx(Button, { asChild: true, variant: "outline", size: "icon", className: "flex justify-center items-center relative  ", children: _jsxs(Link, { to: "/cart", children: [_jsx(ShoppingCart, {}), _jsx("span", { className: "absolute -top-3 -right-3 bg-primary text-white dark:text-black dark:text-white rounded-full h-6 w-6 flex items-center justify-center text-xs", children: numItemInCart })] }) }));
}
export default CartButton;
