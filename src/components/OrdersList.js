import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useLoaderData } from "react-router-dom";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow, } from "./ui/table";
function OrdersList() {
    const { data: orders, meta } = useLoaderData();
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "mt-16", children: [_jsxs("h4", { className: "mb-4 capitalize", children: ["total orders: ", meta.pagination.total] }), _jsxs(Table, { children: [_jsx(TableCaption, { children: " A list of your recent orders." }), _jsx(TableHeader, { children: _jsxs(TableRow, { children: [_jsx(TableHead, { children: "Name" }), _jsx(TableHead, { children: "Address" }), _jsx(TableHead, { children: "Products" }), _jsx(TableHead, { children: "Cost" }), _jsx(TableHead, { children: "Date" })] }) }), _jsx(TableBody, { children: orders.map((el) => {
                                const { name, address, numItemsInCart, orderTotal, createdAt } = el.attributes;
                                return (_jsx(_Fragment, { children: _jsxs(TableRow, { children: [_jsx(TableCell, { children: name }), _jsx(TableCell, { children: address }), _jsx(TableCell, { className: "text-center", children: numItemsInCart }), _jsx(TableCell, { children: orderTotal }), _jsx(TableCell, { children: new Date(createdAt).toDateString() })] }, el.id) }));
                            }) })] })] }) }));
}
export default OrdersList;
