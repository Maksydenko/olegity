import ReactPaginate from "react-paginate";
import clsx from "clsx";

const Pagination = ({
  className,
  itemsPerTotal: { length: itemsPerTotalLength },
  pageCount,
  pageRangeDisplayed = 3,
  marginPagesDisplayed = 1,
  onPageChange,
}) => {
  if (!itemsPerTotalLength) {
    return null;
  }
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
      breakLabel="..."
      previousLabel=""
      nextLabel=""
      pageCount={pageCount}
      pageRangeDisplayed={pageRangeDisplayed}
      marginPagesDisplayed={marginPagesDisplayed}
      onPageChange={onPageChange}
    />
  );
};

export default Pagination;
