import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useToast } from "@/hooks/use-toast";
import { clearCart } from "@/features/cart/cartSlice";
import { logoutUser } from "@/features/user/userSlice";
function Header() {
  const dispatch = useAppDispatch();
  const { toast } = useToast();
  const user = useAppSelector((state) => state.userState.user);
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(clearCart());
    dispatch(logoutUser());
    toast({ description: "logged out" });
    navigate("/");
  };
  return _jsx("header", {
    children: _jsx("div", {
      className: " align-element flex jutify-center sm:justify-end py-2",
      children: user
        ? _jsxs("div", {
            className: "flex gap-x-2 sm:gap-x-8 items-center",
            children: [
              _jsxs("p", {
                className: "text-xs sm:text-sm ",
                children: [" Hello, ", user.username],
              }),
              _jsx(Button, {
                variant: "link",
                size: "sm",
                onClick: handleLogout,
                children: "Logout",
              }),
            ],
          })
        : _jsxs("div", {
            className: "flex gap-x-6 justify-center items-center -mr-4",
            children: [
              _jsx(Button, {
                asChild: true,
                variant: "link",
                size: "sm",
                children: _jsx(Link, {
                  to: "/login",
                  children: "Sign in / Guest",
                }),
              }),
              _jsx(Button, {
                asChild: true,
                variant: "link",
                size: "sm",
                children: _jsx(Link, { to: "/register", children: "Register" }),
              }),
            ],
          }),
    }),
  });
}
export default Header;
