import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useLoaderData } from "react-router-dom";
import { ProductsGrid, ProductsList } from ".";
import { useState } from "react";
import { Button } from "./ui/button";
import { LayoutGrid, List } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
function ProductsContainer() {
    const { meta } = useLoaderData();
    const totalProducts = meta.pagination.total;
    const [layout, setLayout] = useState("grid");
    return (_jsxs(_Fragment, { children: [_jsxs("section", { children: [_jsxs("div", { className: "flex justify-between items-center mt-9", children: [_jsxs("h4", { className: "font-mediom text-md", children: [totalProducts, " product", totalProducts > 1 && "s"] }), _jsxs("div", { className: "flex gap-x-4", children: [_jsx(Button, { onClick: () => setLayout("grid"), variant: layout === "grid" ? "default" : "ghost", size: "icon", children: _jsx(LayoutGrid, {}) }), _jsx(Button, { onClick: () => setLayout("list"), variant: layout === "list" ? "default" : "ghost", size: "icon", children: _jsx(List, {}) })] })] }), _jsx(Separator, { className: "mt-4" })] }), _jsx("div", { children: totalProducts === 0 ? (_jsx("h5", { className: "text-2xl mt-16", children: "sorry, no products matched your search..." })) : layout === "grid" ? (_jsx(ProductsGrid, {})) : (_jsx(ProductsList, {})) })] }));
}
export default ProductsContainer;
