import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomeLayout, Landing, Error, Products, SingleProduct, Cart, About, Register, Login, Checkout, Orders, } from "./pages";
import ErrorElement from "./components/ErrorElement";
import { loader as landingLoader } from "./pages/Landing";
import { loader as productsLoader } from "./pages/Products";
import { loader as singleProductLoader } from "./pages/SingleProduct";
import { loader as checkoutLoader } from "./pages/Checkout";
import { action as registerUser } from "./pages/Register";
import { action as loginUser } from "./pages/Login";
import { store } from "./store";
import { action as checkoutAction } from "./components/CheckoutForm";
import { loader as ordersLoader } from "./pages/Orders";
function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: _jsx(HomeLayout, {}),
            errorElement: _jsx(Error, {}),
            children: [
                {
                    index: true,
                    element: _jsx(Landing, {}),
                    errorElement: _jsx(ErrorElement, {}),
                    loader: landingLoader,
                },
                { path: "cart", element: _jsx(Cart, {}), errorElement: _jsx(ErrorElement, {}) },
                {
                    path: "checkout",
                    element: _jsx(Checkout, {}),
                    errorElement: _jsx(ErrorElement, {}),
                    loader: checkoutLoader(store),
                    action: checkoutAction(store),
                },
                {
                    path: "orders",
                    loader: ordersLoader(store),
                    element: _jsx(Orders, {}),
                    errorElement: _jsx(ErrorElement, {}),
                },
                {
                    path: "products",
                    element: _jsx(Products, {}),
                    errorElement: _jsx(ErrorElement, {}),
                    loader: productsLoader,
                },
                {
                    path: "products/:id",
                    element: _jsx(SingleProduct, {}),
                    errorElement: _jsx(ErrorElement, {}),
                    loader: singleProductLoader,
                },
                { path: "about/", element: _jsx(About, {}), errorElement: _jsx(ErrorElement, {}) },
            ],
        },
        {
            path: "/register",
            action: registerUser,
            element: _jsx(Register, {}),
            errorElement: _jsx(Error, {}),
        },
        {
            path: "/login",
            action: loginUser(store),
            element: _jsx(Login, {}),
            errorElement: _jsx(Error, {}),
        },
    ]);
    return (_jsx(_Fragment, { children: _jsx(RouterProvider, { router: router }) }));
}
export default App;
