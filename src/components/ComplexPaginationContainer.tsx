import { constructPrevOrNextUrl, constructUrl } from "@/utils/pagination";
import { OrdersResponse } from "@/utils/types";
import { useLoaderData, useLocation } from "react-router-dom";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

function ComplexPaginationContainer() {
  const { meta } = useLoaderData() as OrdersResponse;
  const { pageCount, page } = meta.pagination;
  const { search, pathname } = useLocation();

  const constructButton = ({
    pageNumber,
    isActive,
  }: {
    pageNumber: number;
    isActive: boolean;
  }): React.ReactNode => {
    const url = constructUrl({ pageNumber, search, pathname });
    return (
      <PaginationItem key={pageNumber}>
        <PaginationLink to={url} isActive={isActive}>
          {pageNumber}
        </PaginationLink>
      </PaginationItem>
    );
  };

  const constructEllipsis = (key: string): React.ReactNode => {
    return (
      <PaginationItem key={key}>
        <PaginationEllipsis></PaginationEllipsis>
      </PaginationItem>
    );
  };

  const renderPagination = () => {
    let pages: React.ReactNode[] = [];

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
    pages.push(
      constructButton({ pageNumber: pageCount, isActive: page === pageCount })
    );
    return pages;
  };

  const { prevUrl, nextUrl } = constructPrevOrNextUrl({
    currentPage: page,
    pageCount,
    search,
    pathname,
  });

  return (
    <>
      <Pagination className="mt-16">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious to={prevUrl} />
          </PaginationItem>
          {renderPagination()}
          <PaginationItem>
            <PaginationNext to={nextUrl} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}
export default ComplexPaginationContainer;
