import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Loading } from "@/components";
import Navbar from "@/components/Navbar";
import { Header } from "@/components/ui";
import { Outlet, useNavigation } from "react-router-dom";
function HomeLayout() {
    const navigation = useNavigation();
    const isPageLoading = navigation.state === "loading";
    // const isPageLoading = true;
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsx(Navbar, {}), _jsx("div", { className: "align-element py-20", children: isPageLoading ? _jsx(Loading, {}) : _jsx(Outlet, {}) })] }));
}
export default HomeLayout;
