import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useAppSelector } from "@/hooks";
import { Card } from "./ui/card";
import { FirstColumn, FourthColumn, SecondColumn, ThirdColumn, } from "./CartItemColumns";
function CartItemList() {
    const cartItems = useAppSelector((state) => state.cartState.cartItems);
    return (_jsx("div", { children: cartItems.map((cartItem) => {
            const { cartID, title, price, image, amount, company, productColor } = cartItem;
            return (_jsxs(Card, { className: "flex flex-col gap-y-4 sm:flex-row flex-wrap p-6 mb-8", children: [_jsx(FirstColumn, { image: image, title: title }), _jsx(SecondColumn, { title: title, company: company, productColor: productColor }), _jsx(ThirdColumn, { amount: amount, cartID: cartID }), _jsx(FourthColumn, { price: price })] }, cartItem.cartID));
        }) }));
}
export default CartItemList;
