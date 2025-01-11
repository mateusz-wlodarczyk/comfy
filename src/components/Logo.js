import { jsx as _jsx } from "react/jsx-runtime";
import { Armchair } from "lucide-react";
import { Link } from "react-router-dom";
function Logo() {
    return (_jsx(Link, { to: "/", className: "hidden lg:flex justify-center items-center bg-primary p-2 rounded-lg text-white", children: _jsx(Armchair, { className: "w-8 h-8", color: "orange" }) }));
}
export default Logo;
