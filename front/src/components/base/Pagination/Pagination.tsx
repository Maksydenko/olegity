import { FC, useEffect } from "react";
import { useRouter } from "next/router";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";
import clsx from "clsx";

import { addSearchParam } from "@/utils/addSearchParam.util";
import { getSearchParam } from "@/utils/getSearchParam.util";

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
  const { push, asPath } = useRouter();

  const queryPage = getSearchParam(asPath, "page");
  const currentPage = queryPage ? +queryPage - 1 : 0;

  useEffect(
    () => {
      const numberQueryPage = Number(queryPage);

      if (
        (numberQueryPage <= pageCount && numberQueryPage >= 0) ||
        !pageCount
      ) {
        return;
      }

      const newPath = addSearchParam(asPath, "page");
      push(newPath);
    },
    /* eslint-disable-next-line  */
    [asPath, pageCount, queryPage]
  );

  if (!itemsPerTotalLength) {
    return null;
  }

  const handlePageChange = (page: number) => {
    const newPath = addSearchParam(
      asPath,
      "page",
      page === 1 ? "" : page.toString()
    );

    return newPath;
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
      eventListener="onChange"
      hrefBuilder={(page) => handlePageChange(page)}
    />
  );
};

export default Pagination;
