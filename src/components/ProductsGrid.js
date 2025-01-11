import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { formatAsDollars } from "@/utils/formatDataAsDollars";
import { Link, useLoaderData } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
function ProductsGrid() {
    const { data: products } = useLoaderData();
    return (_jsx("div", { className: "pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3", children: products.map((el) => {
            const { title, price, image } = el.attributes;
            const dollarsAmount = formatAsDollars(price);
            return (_jsx(Link, { to: `/products/${el.id}`, children: _jsx(Card, { children: _jsxs(CardContent, { className: "p-4", children: [_jsx("img", { src: image, alt: title, className: "rounded-md h-64 md:h-48 w-full object-cover" }), _jsxs("div", { className: "mt-4 text-center", children: [_jsx("h2", { className: "text-xl font-semibold capitalize", children: title }), _jsx("p", { className: "text-primary font-light mt-2", children: dollarsAmount })] })] }) }) }, el.id));
        }) }));
}
export default ProductsGrid;
