import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Form, redirect } from "react-router-dom";
import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";
import { toast } from "@/hooks/use-toast";
import { formatAsDollars } from "@/utils/formatDataAsDollars";
import { customFetch } from "@/utils/customFetch";
import { clearCart } from "@/features/cart/cartSlice";
export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get("name");
    const address = formData.get("address");
    if (!name || !address) {
      toast({ description: "please fill out all fields" });
      return null;
    }
    const user = store.getState().userState.user;
    if (!user) {
      toast({ description: "please log in to place an order" });
      return redirect("/login");
    }
    const { cartItems, orderTotal, numItemsInCart } =
      store.getState().cartState;
    const info = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: formatAsDollars(orderTotal),
      cartItems,
      numItemsInCart,
    };
    try {
      // const result =
      await customFetch.post(
        "/orders",
        { data: info },
        {
          headers: {
            Authorization: `Bearer ${user.jwt}`,
          },
        }
      );
      store.dispatch(clearCart());
      toast({ description: "order placed" });
      return redirect("/orders");
    } catch (error) {
      toast({ description: "order failed" });
      return null;
    }
    return null;
  };
function CheckoutForm() {
  return _jsxs(Form, {
    method: "post",
    className: "flex flex-col gap-y-4",
    children: [
      _jsx("h4", {
        className: "font-medium text-xl mb-4",
        children: "Shipping Information",
      }),
      _jsx(FormInput, { label: "first name", name: "name", type: "text" }),
      _jsx(FormInput, { label: "address", name: "address", type: "address" }),
      _jsx(SubmitBtn, { text: "Place your order", className: "mt-4" }),
    ],
  });
}
export default CheckoutForm;
