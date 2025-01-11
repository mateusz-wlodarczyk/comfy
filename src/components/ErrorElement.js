import { jsx as _jsx } from "react/jsx-runtime";
import { useRouteError } from "react-router-dom";
function ErrorElement() {
    const error = useRouteError();
    return _jsx("h4", { className: "font-bold text-4xl", children: "there was some error" });
}
export default ErrorElement;
