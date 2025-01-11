import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import FormInput from "@/components/FormInput";
import SubmitBtn from "@/components/SubmitBtn";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { loginUser } from "@/features/user/userSlice";
import { toast } from "@/hooks/use-toast";
import { customFetch } from "@/utils/customFetch";
import { useDispatch } from "react-redux";
import { Form, Link, redirect, useNavigate } from "react-router-dom";
export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());
    try {
      const response = await customFetch.post("/auth/local", data);
      const username = response.data.user.username;
      const jwt = response.data.jwt;
      store.dispatch(loginUser({ username, jwt }));
      return redirect("/");
    } catch (error) {
      toast({ description: "Login failed" });
      return null;
    }
  };
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginAsGuestUser = async () => {
    try {
      const response = await customFetch.post("auth/local", {
        identifier: "mwtest@wp.pl",
        password: "secret",
      });
      const username = response.data.user.username;
      const jwt = response.data.jwt;
      dispatch(loginUser({ username, jwt }));
      navigate("/");
    } catch (err) {
      toast({ description: "login failed" });
    }
  };
  return _jsx("section", {
    className: "h-screen grid place-items-center",
    children: _jsxs(Card, {
      className: "w-96 bg-muted",
      children: [
        _jsx(CardHeader, {
          children: _jsx(CardTitle, {
            className: "text-center",
            children: "Login",
          }),
        }),
        _jsx(CardContent, {
          children: _jsxs(Form, {
            method: "post",
            children: [
              _jsx(FormInput, {
                type: "email",
                label: "email",
                name: "identifier",
              }),
              _jsx(FormInput, { type: "password", name: "password" }),
              _jsx(SubmitBtn, { text: "login", className: "w-full mt-4" }),
              _jsx(Button, {
                type: "button",
                variant: "outline",
                onClick: loginAsGuestUser,
                className: "w-full mt-4",
                children: "guest",
              }),
              _jsxs("p", {
                className: "text-center mt-4 ",
                children: [
                  "not a member yet?",
                  _jsx(Button, {
                    type: "button",
                    asChild: true,
                    variant: "link",
                    children: _jsx(Link, {
                      to: "/register",
                      children: "register",
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
export default Login;
