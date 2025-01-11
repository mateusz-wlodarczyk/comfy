import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { constructPrevOrNextUrl, constructUrl } from "@/utils/pagination";
import { useLoaderData, useLocation } from "react-router-dom";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, } from "./ui/pagination";
function ComplexPaginationContainer() {
    const { meta } = useLoaderData();
    const { pageCount, page } = meta.pagination;
    const { search, pathname } = useLocation();
    const pages = Array.from({ length: pageCount }, (_, index) => index + 1);
    if (pageCount < 2)
        return null;
    //   const renderPagination = pages.map((pageNumber) => {
    //     const isActive = pageNumber === page;
    //     const url = constructUrl({ pageNumber, search, pathname });
    //     return (
    //       <PaginationItem key={pageNumber}>
    //         <PaginationLink to={url} isActive={isActive}>
    //           {pageNumber}
    //         </PaginationLink>
    //       </PaginationItem>
    //     );
    //   });
    const constructButton = ({ pageNumber, isActive, }) => {
        const url = constructUrl({ pageNumber, search, pathname });
        return (_jsx(PaginationItem, { children: _jsx(PaginationLink, { to: url, isActive: isActive, children: pageNumber }) }, pageNumber));
    };
    const constructEllipsis = (key) => {
        return (_jsx(PaginationItem, { children: _jsx(PaginationEllipsis, {}) }, key));
    };
    const renderPagination = () => {
        let pages = [];
        pages.push(constructButton({ pageNumber: 1, isActive: page === 1 }));
        if (page > 2) {
            pages.push(constructEllipsis("dots-1"));
        }
        if (page !== 1 && page !== pageCount) {
            pages.push(constructButton({ pageNumber: page, isActive: true }));
        }
        if (page < pageCount - 1) {
            pages.push(constructEllipsis("dots-1"));
        }
        pages.push(constructButton({ pageNumber: pageCount, isActive: page === pageCount }));
        return pages;
    };
    const { prevUrl, nextUrl } = constructPrevOrNextUrl({
        currentPage: page,
        pageCount,
        search,
        pathname,
    });
    return (_jsx(_Fragment, { children: _jsx(Pagination, { className: "mt-16", children: _jsxs(PaginationContent, { children: [_jsx(PaginationItem, { children: _jsx(PaginationPrevious, { to: prevUrl }) }), renderPagination(), _jsx(PaginationItem, { children: _jsx(PaginationNext, { to: nextUrl }) })] }) }) }));
}
export default ComplexPaginationContainer;
