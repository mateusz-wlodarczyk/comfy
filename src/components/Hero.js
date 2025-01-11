import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { HeroCarusel } from ".";
import { Button } from "./ui/button";
function Hero() {
    return (_jsxs("section", { className: "grid grid-cols-1 lg:grid-cols-2 gap-24 items-center", children: [_jsxs("div", { children: [_jsx("h1", { className: "max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl", children: "we are changing they way people shop" }), _jsx("p", { className: "mt-8 max-w-xl text-lg leading-8", children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt earum explicabo quae quibusdam aut, fugiat deleniti dolores fugit neque impedit culpa nobis veritatis. Tempore et necessitatibus dolorem, corporis libero officia." }), _jsx(Button, { asChild: true, size: "lg", className: "mt-10", children: _jsx(Link, { to: "/products", children: "our products" }) })] }), _jsx(HeroCarusel, {})] }));
}
export default Hero;
