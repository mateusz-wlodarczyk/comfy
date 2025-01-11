import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Filters, PaginationContainer, ProductsContainer } from "@/components";
import { customFetch } from "@/utils/customFetch";
const url = "/products";
export const loader = async ({ request, }) => {
    const params = Object.fromEntries([
        ...new URL(request.url).searchParams.entries(),
    ]);
    const response = await customFetch(url, { params });
    return { ...response.data, params };
};
function Products() {
    return (_jsxs(_Fragment, { children: [_jsx(Filters, {}), _jsx(ProductsContainer, {}), _jsx(PaginationContainer, {})] }));
}
export default Products;
