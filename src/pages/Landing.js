import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { FeaturedProducts, Hero, ProductsGrid } from "@/components";
import { customFetch } from "@/utils/customFetch";
import { useLoaderData } from "react-router-dom";
const url = "/products?featured=true";
export const loader = async () => {
    const response = await customFetch(url);
    return { ...response.data };
};
function Landing() {
    const result = useLoaderData();
    return (_jsxs(_Fragment, { children: [_jsx(Hero, {}), _jsx(FeaturedProducts, {}), _jsx(ProductsGrid, {})] }));
}
export default Landing;
