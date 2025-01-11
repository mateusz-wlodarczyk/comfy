import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Form, Link, useLoaderData } from "react-router-dom";
import { Button } from "./ui/button";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckbox from "./FormCheckbox";
function Filters() {
    const { meta, params } = useLoaderData();
    const { search, company, category, shipping, order, price } = params;
    return (_jsx(_Fragment, { children: _jsxs(Form, { className: "border rounded-md px-8 py-4 grid gap-x-4 gap-y-4 lg:grid-cols-4 items-center md:grid-cols-3 md: grid-cols-2", children: [_jsx(FormInput, { label: "search product", name: "search", type: "search", defaultValue: "search" }), _jsx(FormSelect, { label: "select category", name: "category", options: meta.categories, defaultValue: category }), _jsx(FormSelect, { label: "select company", name: "company", options: meta.companies, defaultValue: company }), _jsx(FormSelect, { label: "order by", name: "order", options: ["a-z", "z-a", "high", "low"], defaultValue: order }), _jsx(FormRange, { label: "price", name: "price", defaultValue: price }), _jsx(FormCheckbox, { label: "free shipping", name: "shipping", defaultValue: shipping }), _jsx(Button, { type: "submit", size: "sm", className: "self-end mb-2", children: "Search" }), _jsx(Button, { type: "button", asChild: true, size: "sm", variant: "outline", className: "self-end mb-2", children: _jsx(Link, { to: "/products", children: " reset " }) })] }) }));
}
export default Filters;
