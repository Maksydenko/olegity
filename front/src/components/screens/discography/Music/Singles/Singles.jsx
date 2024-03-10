"use client";

import { useState } from "react";

import Pagination from "@/components/base/Pagination/Pagination";
import Search from "@/components/form/Search/Search";
import Items from "./Items/Items";

const Singles = ({ singles }) => {
  const [text, setText] = useState("");
  const [itemOffset, setItemOffset] = useState(0);

  const ITEMS_PER_PAGE = 12;

  const filteredSingles = singles.filter(({ title }) => {
    const titleLowerCased = title.toLowerCase();
    const filterTextLowerCased = text.toLowerCase();

    return titleLowerCased.includes(filterTextLowerCased);
  });
  const { length: filteredSinglesLength } = filteredSingles;

  const endOffset = itemOffset + ITEMS_PER_PAGE;
  const currentItems = filteredSingles.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredSinglesLength / ITEMS_PER_PAGE);

  const handlePageChange = (e) => {
    const newOffset = (e.selected * ITEMS_PER_PAGE) % filteredSinglesLength;
    setItemOffset(newOffset);

    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div className="music__singles singles">
      <div className="singles__container">
        <Search className="singles__search" text={text} setText={setText} />
        <Items singles={currentItems} filterText={text} />
        <Pagination
          className="singles__pagination"
          itemsPerTotal={currentItems}
          pageCount={pageCount}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Singles;
