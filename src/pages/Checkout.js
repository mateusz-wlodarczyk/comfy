import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { SectionTitle } from "@/components";
import CartTotal from "@/components/CartTotal";
import CheckoutForm from "@/components/CheckoutForm";
import { useAppSelector } from "@/hooks";
import { toast } from "@/hooks/use-toast";
import { redirect } from "react-router-dom";
export const loader = (store) => async () => {
    const user = store.getState().userState.user;
    if (!user) {
        toast({ description: "please login to continue" });
        return redirect("/login");
    }
    return null;
};
function Checkout() {
    const cartTotal = useAppSelector((state) => state.cartState.numItemsInCart);
    if (cartTotal === 0) {
        return _jsx(SectionTitle, { text: "your cart is empty" });
    }
    return (_jsxs(_Fragment, { children: [_jsx(SectionTitle, { text: "Place your order" }), _jsxs("div", { className: "mt-8 grid gap-8 md:grid-cols-2 items-start", children: [_jsx(CheckoutForm, {}), _jsx(CartTotal, {})] })] }));
}
export default Checkout;
