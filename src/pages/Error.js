import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";
function Error() {
    const error = useRouteError();
    if (isRouteErrorResponse(error) && error.status === 404) {
        return (_jsx("main", { className: "grid min-h-[100vh] place-items-center px-8", children: _jsxs("div", { className: "text-center", children: [_jsx("p", { className: "text-9xl font-semibold text-primary", children: "404" }), _jsx("h1", { className: "mt-4 text-3xl font-bold tracking-tight sm:text-5xl", children: "Page not found" }), _jsx("p", { className: "mt-6 text-lg leading-7", children: "sorry, we could not find the page you are looking for." }), _jsx("div", { className: "mt-10", children: _jsx(Button, { asChild: true, size: "lg", variant: "secondary", children: _jsx(Link, { to: "/", children: "Go back home" }) }) })] }) }));
    }
    return (_jsx("main", { className: "grid min-h-[100vh] place-items-center px-8", children: _jsx("h4", { className: "text-center font-bold text-4xl", children: " there was an error..." }) }));
}
export default Error;
