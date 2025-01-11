import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { constructPrevOrNextUrl, constructUrl } from "@/utils/pagination";
import { useLoaderData, useLocation } from "react-router-dom";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, } from "./ui/pagination";
function PaginationContainer() {
    const { meta } = useLoaderData();
    const { pageCount, page } = meta.pagination;
    const { search, pathname } = useLocation();
    const pages = Array.from({ length: pageCount }, (_, index) => index + 1);
    if (pageCount < 2)
        return null;
    const renderPagination = pages.map((pageNumber) => {
        const isActive = pageNumber === page;
        const url = constructUrl({ pageNumber, search, pathname });
        return (_jsx(PaginationItem, { children: _jsx(PaginationLink, { to: url, isActive: isActive, children: pageNumber }) }, pageNumber));
    });
    const { prevUrl, nextUrl } = constructPrevOrNextUrl({
        currentPage: page,
        pageCount,
        search,
        pathname,
    });
    return (_jsx(_Fragment, { children: _jsx(Pagination, { className: "mt-16", children: _jsxs(PaginationContent, { children: [_jsx(PaginationItem, { children: _jsx(PaginationPrevious, { to: prevUrl }) }), renderPagination, _jsx(PaginationItem, { children: _jsx(PaginationNext, { to: nextUrl }) })] }) }) }));
}
export default PaginationContainer;
