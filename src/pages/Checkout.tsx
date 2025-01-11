import { SectionTitle } from "@/components";
import CartTotal from "@/components/CartTotal";
import CheckoutForm from "@/components/CheckoutForm";
import { useAppSelector } from "@/hooks";
import { toast } from "@/hooks/use-toast";
import { ReduxStore } from "@/store";
import { LoaderFunction, redirect } from "react-router-dom";

export const loader =
  (store: ReduxStore): LoaderFunction =>
  async (): Promise<Response | null> => {
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
    return <SectionTitle text="your cart is empty" />;
  }
  return (
    <>
      <SectionTitle text="Place your order" />
      <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
        <CheckoutForm />
        <CartTotal />
      </div>
    </>
  );
}
export default Checkout;
