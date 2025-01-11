import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CartButton, LinksDropdown, Logo, ModeToggle, NavLinks } from ".";
function Navbar() {
    return (_jsx("nav", { className: "bg-muted py-4", children: _jsxs("div", { className: "align-element flex justify-between items-center gap-x-4", children: [_jsx(Logo, {}), _jsx(LinksDropdown, {}), _jsx(NavLinks, {}), _jsxs("div", { className: "flex justify-center items-center gap-x-4", children: [_jsx(ModeToggle, {}), _jsx(CartButton, {})] })] }) }));
}
export default Navbar;
