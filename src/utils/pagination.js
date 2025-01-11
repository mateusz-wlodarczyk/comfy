export const constructUrl = ({ pageNumber, search, pathname, }) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber.toString());
    return `${pathname}?${searchParams}`;
};
export const constructPrevOrNextUrl = ({ currentPage, pageCount, search, pathname, }) => {
    let prevPage = currentPage - 1;
    if (prevPage < 1) {
        prevPage = pageCount;
    }
    const prevUrl = constructUrl({ pageNumber: prevPage, search, pathname });
    let nextPage = currentPage + 1;
    if (nextPage > pageCount) {
        nextPage = pageCount;
    }
    const nextUrl = constructUrl({ pageNumber: nextPage, search, pathname });
    return { prevUrl, nextUrl };
};
