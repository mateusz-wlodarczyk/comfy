import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Separator } from "@radix-ui/react-separator";
function SectionTitle({ text }) {
    return (_jsxs("div", { children: [_jsx("h2", { className: "text-3xl font-medium tracking-wider capitalize mb-8", children: text }), _jsx(Separator, {})] }));
}
export default SectionTitle;
