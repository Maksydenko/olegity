import { FC } from "react";
import { useSearchParams } from "next/navigation";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";
import clsx from "clsx";

import { getNewQuery } from "@/utils/getNewQuery.util";

interface PaginationProps {
  className?: string;
  itemsPerTotal: unknown[];
  pageCount: ReactPaginateProps["pageCount"];
  pageRangeDisplayed?: ReactPaginateProps["pageRangeDisplayed"];
  marginPagesDisplayed?: ReactPaginateProps["marginPagesDisplayed"];
  breakLabel?: ReactPaginateProps["breakLabel"];
  previousLabel?: ReactPaginateProps["previousLabel"];
  nextLabel?: ReactPaginateProps["nextLabel"];
  onPageChange?: ReactPaginateProps["onPageChange"];
}

const Pagination: FC<PaginationProps> = ({
  className,
  itemsPerTotal: { length: itemsPerTotalLength },
  pageCount,
  pageRangeDisplayed = 3,
  marginPagesDisplayed = 1,
  breakLabel = "...",
  previousLabel = "",
  nextLabel = "",
  onPageChange,
}) => {
  const query = useSearchParams();

  if (!itemsPerTotalLength) {
    return null;
  }

  const queryArray = [...query];
  const queryObject = Object.fromEntries(queryArray);
  const queryPage = queryObject?.page;
  const currentPage = +queryPage - 1 || 0;

  // Handle page change
  interface IHandlePageChange {
    (page: number): string;
  }
  const handlePageChange: IHandlePageChange = (page) => {
    const newQuery = getNewQuery(queryObject, "page", page.toString());

    return newQuery;
  };

  return (
    <ReactPaginate
      className={clsx(className, "pagination")}
      pageClassName="pagination__page"
      pageLinkClassName="pagination__page-link"
      activeClassName="pagination__active"
      activeLinkClassName="pagination__active-link"
      previousClassName="pagination__previous"
      nextClassName="pagination__next"
      previousLinkClassName="pagination__previous-link _icon-arrow-top"
      nextLinkClassName="pagination__next-link _icon-arrow-top"
      disabledClassName="pagination__disabled"
      disabledLinkClassName="pagination__disabled-link"
      breakClassName="pagination__break"
      breakLinkClassName="pagination__break-link"
      breakLabel={breakLabel}
      previousLabel={previousLabel}
      nextLabel={nextLabel}
      pageCount={pageCount}
      pageRangeDisplayed={pageRangeDisplayed}
      marginPagesDisplayed={marginPagesDisplayed}
      onPageChange={onPageChange}
      forcePage={currentPage}
      eventListener=""
      hrefBuilder={(page) => handlePageChange(page)}
    />
  );
};

export default Pagination;
