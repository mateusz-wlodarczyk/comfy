import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Skeleton } from "./ui/skeleton";
function Loading() {
    return (_jsx(_Fragment, { children: _jsx("div", { className: "pt-12 grid gap-4 md:grid-cols-2 lg:grid-3", children: Array.from({ length: 3 }).map((_, index) => {
                return (_jsxs("div", { className: "flex flex-col space-y-3", children: [" ", _jsx(Skeleton, { className: "h-[125px] w-full rounded-xl" }), _jsx("div", { className: "space-y-2", children: _jsx(Skeleton, { className: "h-4 mx-auto w-[250px]" }) })] }, index));
            }) }) }));
}
export default Loading;
