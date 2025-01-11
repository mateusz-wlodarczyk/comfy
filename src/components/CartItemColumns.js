import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { formatAsDollars } from "@/utils/formatDataAsDollars";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { editItem, removeItem } from "@/features/cart/cartSlice";
import SelectProductAmount, { Mode } from "./SelectProductAmount";
export const FirstColumn = ({ image, title, }) => {
    return (_jsx("img", { src: image, alt: title, className: "h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover" }));
};
export const SecondColumn = ({ company, productColor, title, }) => {
    return (_jsxs("div", { className: "sm:ml-4 md:ml-12 sm:w-48", children: [_jsx("h3", { className: "capitalize font-medium", children: title }), _jsx("h4", { className: "mt-2 capitalize text-sm", children: company }), _jsxs("p", { className: "mt-4 text-sm capitalize flex items-center gap-x-2", children: ["color:", _jsx("span", { style: {
                            width: "15px",
                            height: "15px",
                            borderRadius: "50%",
                            background: productColor,
                        } })] })] }));
};
export const ThirdColumn = ({ amount, cartID, }) => {
    const dispatch = useDispatch();
    const removeItemFromCard = () => {
        dispatch(removeItem(cartID));
    };
    const setAmount = (value) => {
        dispatch(editItem({ cartID, amount: value }));
    };
    return (_jsxs("div", { children: [_jsx(SelectProductAmount, { amount: amount, setAmount: setAmount, mode: Mode.CartItem }), _jsx(Button, { variant: "link", className: "-ml-4", onClick: removeItemFromCard, children: "remove" })] }));
};
export const FourthColumn = ({ price }) => {
    return _jsx("p", { className: "font-medium sm:ml-auto", children: formatAsDollars(price) });
};
