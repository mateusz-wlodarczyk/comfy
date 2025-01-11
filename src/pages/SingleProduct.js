import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import SelectProductAmount, { Mode } from "@/components/SelectProductAmount";
import SelectProductColor from "@/components/SelectProductColor";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { addItem } from "@/features/cart/cartSlice";
import { customFetch } from "@/utils/customFetch";
import { formatAsDollars } from "@/utils/formatDataAsDollars";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLoaderData } from "react-router-dom";
export const loader = async ({ params, }) => {
    const response = await customFetch(`/products/${params.id}`);
    return { ...response.data };
};
function SingleProduct() {
    const { data: product } = useLoaderData();
    const { image, title, price, description, colors, company } = product.attributes;
    const dollarsAmount = formatAsDollars(price);
    const [productColor, setProductColor] = useState(colors[0]);
    const [amount, setAmount] = useState(1);
    const dispatch = useDispatch();
    const cartProduct = {
        cartID: product.id + productColor,
        productID: product.id,
        title,
        price,
        amount,
        productColor,
        company,
        image,
    };
    const addToCart = () => {
        dispatch(addItem(cartProduct));
    };
    return (_jsxs("section", { children: [_jsxs("div", { className: "flex gap-x-2 h-6 items-center", children: [_jsx(Button, { asChild: true, variant: "link", size: "sm", children: _jsx(Link, { to: "/", children: "Home" }) }), _jsx(Separator, { orientation: "vertical" }), _jsx(Button, { asChild: true, variant: "link", size: "sm", children: _jsx(Link, { to: "/products", children: "Products" }) })] }), _jsxs("div", { className: "mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16", children: [_jsx("img", { src: image, alt: title, className: "w-96 h-96 object-cover rounded-lg lg:w-full" }), _jsxs("div", { children: [_jsx("h1", { className: "capitalize text-3xl font-bols", children: title }), _jsx("h4", { className: "text-xl mt-2", children: company }), _jsx("p", { className: "mt-3 text-md bg-muted inline-block p-2 rounded-md", children: dollarsAmount }), _jsx("p", { className: "mt-6 leading-8", children: description }), _jsx(SelectProductColor, { colors: colors, productColor: productColor, setProductColor: setProductColor }), _jsx(SelectProductAmount, { mode: Mode.SingleProduct, amount: amount, setAmount: setAmount }), _jsx(Button, { size: "lg", className: "mt-10", onClick: addToCart, children: "Add to bag" })] })] })] }));
}
export default SingleProduct;
