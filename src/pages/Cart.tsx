import { SectionTitle } from "@/components";
import CartItemList from "@/components/CartItemList";
import CartTotal from "@/components/CartTotal";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/hooks";
import { Link } from "react-router-dom";

function Cart() {
  const user = useAppSelector((state) => state.userState.user);
  const numItemsInCart = useAppSelector(
    (state) => state.cartState.numItemsInCart
  );

  if (numItemsInCart === 0) {
    return <SectionTitle text="empty cart" />;
  }
  return (
    <>
      <SectionTitle text="shopping cart" />
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotal />{" "}
          <Button asChild className="mt-8 w-full">
            {user ? (
              <Link to="/checkout">proceed to checkout</Link>
            ) : (
              <Link to="/login">please login</Link>
            )}
          </Button>
        </div>
      </div>
    </>
  );
}
export default Cart;
