import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import FormInput from "@/components/FormInput";
import SubmitBtn from "@/components/SubmitBtn";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { customFetch } from "@/utils/customFetch";
import { AxiosError } from "axios";
import { Form, Link, redirect } from "react-router-dom";
export const action = async ({ request, }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());
    try {
        const result = await customFetch.post("/auth/local/register", data);
        toast({ description: "registered" });
        return redirect("/login");
    }
    catch (error) {
        const errorMsg = error instanceof AxiosError
            ? error.response?.data.error.message
            : "unknown registered error";
        toast({ description: errorMsg });
        return null;
    }
};
const registerAsGuestUser = () => {
    console.log("registerAsGuestUser user");
};
function Register() {
    return (_jsx("section", { className: "h-screen grid place-items-center", children: _jsxs(Card, { className: "w-96 bg-muted ", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { className: "text-center", children: "Register" }) }), _jsx(CardContent, { children: _jsxs(Form, { method: "post", children: [_jsx(FormInput, { type: "text", name: "username" }), _jsx(FormInput, { type: "text", name: "email" }), _jsx(FormInput, { type: "text", name: "password" }), _jsx(SubmitBtn, { text: "register", className: "w-full mt-4" }), _jsx(Button, { type: "button", variant: "outline", onClick: registerAsGuestUser, className: "w-full mt-4", children: "guest" }), _jsxs("p", { className: "text-center mt-4 ", children: ["Already a member?", _jsx(Button, { type: "button", asChild: true, variant: "link", children: _jsx(Link, { to: "/login", children: "login" }) })] })] }) })] }) }));
}
export default Register;
