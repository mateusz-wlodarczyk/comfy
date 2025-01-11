import { SectionTitle } from "@/components";
import ComplexPaginationContainer from "@/components/ComplexPaginationContainer";
import OrdersList from "@/components/OrdersList";
import { toast } from "@/hooks/use-toast";
import { ReduxStore } from "@/store";
import { customFetch } from "@/utils/customFetch";
import { OrdersResponse } from "@/utils/types";
import { LoaderFunctionArgs, redirect, useLoaderData } from "react-router-dom";

export const loader =
  (store: ReduxStore) =>
  async ({
    request,
  }: LoaderFunctionArgs): Promise<OrdersResponse | Response | null> => {
    const user = store.getState().userState.user;

    if (!user) {
      toast({ description: "please login to continue" });
      return redirect("/login");
    }

    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    try {
      const response = await customFetch.get<OrdersResponse>("/orders", {
        params,
        headers: {
          Authorization: `Bearer ${user.jwt}`,
        },
      });
      return { ...response.data };
    } catch (error) {
      toast({ description: "Failed to fetch orders" });
      return null;
    }
  };

function Orders() {
  const { meta } = useLoaderData() as OrdersResponse;
  if (meta.pagination.total < 1) {
    return <SectionTitle text="please make an order" />;
  }
  return (
    <>
      <SectionTitle text="Your orders" />
      <OrdersList />
      <ComplexPaginationContainer />
    </>
  );
}
export default Orders;
