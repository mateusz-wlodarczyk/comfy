import { jsx as _jsx } from "react/jsx-runtime";
import { useAppSelector } from "@/hooks";
import { links } from "@/utils";
import { NavLink } from "react-router-dom";
function NavLinks() {
    const user = useAppSelector((state) => state.userState.user);
    return (_jsx("div", { className: "hidden lg:flex justify-center items-center gap-x-4", children: links.map((el) => {
            const restrictedRoutes = el.href === "checkout" || el.href === "orders";
            if (restrictedRoutes && !user) {
                return null;
            }
            return (_jsx(NavLink, { to: el.href, className: (isActice) => {
                    return `capitalize font-light tracking-wide ${isActice ? "text-primary" : ""}`;
                }, children: el.label }, el.label));
        }) }));
}
export default NavLinks;
