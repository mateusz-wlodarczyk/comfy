import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "./ui/carousel";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";
function HeroCarusel() {
    const carouselImages = [hero1, hero2, hero3, hero4];
    return (_jsx(_Fragment, { children: _jsx("div", { className: "hidden lg:block", children: _jsxs(Carousel, { children: [_jsx(CarouselContent, { children: carouselImages.map((el, index) => {
                            return (_jsx(CarouselItem, { children: _jsx(Card, { children: _jsx(CardContent, { className: "p-2", children: _jsx("img", { src: el, alt: "hero", className: "w-full h-[24rem] rounded-md object-cover" }) }) }) }, index));
                        }) }), _jsx(CarouselPrevious, {}), _jsx(CarouselNext, {})] }) }) }));
}
export default HeroCarusel;
