import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "./ui/button";
import { AlignLeft } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, } from "./ui/dropdown-menu";
import { links } from "@/utils";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "@/hooks";
function LinksDropdown() {
    const user = useAppSelector((state) => state.userState.user);
    return (_jsxs(DropdownMenu, { children: [_jsx(DropdownMenuTrigger, { asChild: true, className: "lg:hidden", children: _jsxs(Button, { variant: "outline", size: "icon", children: [_jsx(AlignLeft, {}), _jsx("span", { className: "sr-only", children: "Toggle Links" })] }) }), _jsx(DropdownMenuContent, { className: "w-52 lg:hidden", align: "start", sideOffset: 25, children: links.map((el) => {
                    const restrictedRoutes = el.href === "checkout" || el.href === "orders";
                    if (restrictedRoutes && !user) {
                        return null;
                    }
                    return (_jsx(DropdownMenuItem, { children: _jsx(NavLink, { to: el.href, className: (isActive) => {
                                return `capitalize w-full ${isActive ? "text-primary" : ""}`;
                            }, children: el.label }) }, el.label));
                }) })] }));
}
export default LinksDropdown;
