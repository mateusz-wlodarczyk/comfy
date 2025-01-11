import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Error,
  Products,
  SingleProduct,
  Cart,
  About,
  Register,
  Login,
  Checkout,
  Orders,
} from "./pages";

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
      element: <HomeLayout />,
      errorElement: <Error />,

      children: [
        {
          index: true,
          element: <Landing />,
          errorElement: <ErrorElement />,
          loader: landingLoader,
        },
        { path: "cart", element: <Cart />, errorElement: <ErrorElement /> },
        {
          path: "checkout",
          element: <Checkout />,
          errorElement: <ErrorElement />,
          loader: checkoutLoader(store),
          action: checkoutAction(store),
        },
        {
          path: "orders",
          loader: ordersLoader(store),
          element: <Orders />,
          errorElement: <ErrorElement />,
        },
        {
          path: "products",
          element: <Products />,
          errorElement: <ErrorElement />,
          loader: productsLoader,
        },
        {
          path: "products/:id",
          element: <SingleProduct />,
          errorElement: <ErrorElement />,
          loader: singleProductLoader,
        },
        { path: "about/", element: <About />, errorElement: <ErrorElement /> },
      ],
    },
    {
      path: "/register",
      action: registerUser,
      element: <Register />,
      errorElement: <Error />,
    },
    {
      path: "/login",
      action: loginUser(store),
      element: <Login />,
      errorElement: <Error />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
