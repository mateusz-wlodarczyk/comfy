import { toast } from "@/hooks/use-toast";
import { createSlice } from "@reduxjs/toolkit";
const defaultState = {
    cartItems: [],
    numItemsInCart: 0,
    cartTotal: 0,
    shipping: 500,
    tax: 0,
    orderTotal: 0,
};
const getCartFromLocalStorage = () => {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : defaultState;
};
const cartSlice = createSlice({
    name: "cart",
    initialState: getCartFromLocalStorage(),
    reducers: {
        addItem: (state, action) => {
            const newCartItem = action.payload;
            const item = state.cartItems.find((el) => el.cartID === newCartItem.cartID);
            if (item) {
                item.amount += newCartItem.amount;
            }
            else {
                state.cartItems.push(newCartItem);
            }
            state.numItemsInCart += newCartItem.amount;
            state.cartTotal += Number(newCartItem.price) * newCartItem.amount;
            cartSlice.caseReducers.calculateTotals(state);
            toast({ description: "item added to cart" });
        },
        clearCart: () => {
            localStorage.setItem("cart", JSON.stringify(defaultState));
            return defaultState;
        },
        removeItem: (state, action) => {
            const cartID = action.payload;
            const cartItem = state.cartItems.find((el) => el.cartID === cartID);
            if (!cartItem)
                return;
            state.cartItems = state.cartItems.filter((el) => el.cartID !== cartID);
            state.numItemsInCart -= cartItem.amount;
            state.cartTotal -= Number(cartItem.price) * cartItem.amount;
            cartSlice.caseReducers.calculateTotals(state);
            toast({ description: "item removed from cart" });
        },
        editItem: (state, action) => {
            const { cartID, amount } = action.payload;
            const cartItem = state.cartItems.find((el) => el.cartID === cartID);
            if (!cartItem)
                return;
            state.numItemsInCart += amount - cartItem.amount;
            state.cartTotal += Number(cartItem.price) * (amount - cartItem.amount);
            cartItem.amount = amount;
            cartSlice.caseReducers.calculateTotals(state);
            toast({ description: "amount updated" });
        },
        calculateTotals: (state) => {
            state.tax = 0.1 * state.cartTotal;
            state.orderTotal = state.cartTotal + state.shipping + state.tax;
            localStorage.setItem("cart", JSON.stringify(state));
        },
    },
});
export const { addItem, clearCart, removeItem, editItem, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;
