import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link, useLoaderData } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import { formatAsDollars } from "@/utils/formatDataAsDollars";
function ProductsList() {
    const { data: products } = useLoaderData();
    return (_jsx(_Fragment, { children: _jsx("div", { className: "mt-12 grid gap-y-8", children: products.map((el) => {
                const { title, price, image, company } = el.attributes;
                const collarsAmount = formatAsDollars(price);
                return (_jsx(_Fragment, { children: _jsx(Link, { to: `/products/${el.id}`, children: _jsx(Card, { children: _jsxs(CardContent, { className: "p-8 gap-y-4 grid md:grid-cols-3", children: [_jsx("img", { src: image, alt: title, className: "h-64 w-full md:h-48 md:w-48 rouned-md object-cover" }), _jsxs("div", { children: [_jsx("h2", { className: "text-xl font-semibold capitalize", children: title }), _jsx("h4", { children: company })] }), _jsx("p", { className: "text-primary md:ml-auto", children: collarsAmount })] }) }) }, el.id) }));
            }) }) }));
}
export default ProductsList;
