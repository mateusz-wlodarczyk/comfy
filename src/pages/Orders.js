import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { SectionTitle } from "@/components";
import ComplexPaginationContainer from "@/components/ComplexPaginationContainer";
import OrdersList from "@/components/OrdersList";
import { toast } from "@/hooks/use-toast";
import { customFetch } from "@/utils/customFetch";
import { redirect, useLoaderData } from "react-router-dom";
export const loader = (store) => async ({ request }) => {
    const user = store.getState().userState.user;
    if (!user) {
        toast({ description: "please login to continue" });
        return redirect("/login");
    }
    const params = Object.fromEntries([
        ...new URL(request.url).searchParams.entries(),
    ]);
    try {
        const response = await customFetch.get("/orders", {
            params,
            headers: {
                Authorization: `Bearer ${user.jwt}`,
            },
        });
        return { ...response.data };
    }
    catch (error) {
        toast({ description: "Failed to fetch orders" });
        return null;
    }
};
function Orders() {
    const { meta } = useLoaderData();
    if (meta.pagination.total < 1) {
        return _jsx(SectionTitle, { text: "please make an order" });
    }
    return (_jsxs(_Fragment, { children: [_jsx(SectionTitle, { text: "Your orders" }), _jsx(OrdersList, {}), _jsx(ComplexPaginationContainer, {})] }));
}
export default Orders;
