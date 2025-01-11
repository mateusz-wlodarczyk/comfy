import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigation } from "react-router-dom";
import { Button } from "./ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
function SubmitBtn({ text, className }) {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";
    return (_jsx(Button, { type: "submit", className: className, disabled: isSubmitting, children: isSubmitting ? (_jsxs("span", { className: "flex", children: [_jsx(ReloadIcon, { className: "mr-2 animate-spin h-4 w-4" }), "Submitting..."] })) : (text) }));
}
export default SubmitBtn;
