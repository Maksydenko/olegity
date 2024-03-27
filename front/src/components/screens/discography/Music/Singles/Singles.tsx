"use client";

import { FC } from "react";
import { useSearchParams } from "next/navigation";
import clsx from "clsx";

import Pagination from "@/components/base/Pagination/Pagination";
import Search from "@/components/form/Search/Search";
import SinglesList from "./SinglesItems/SinglesList";

import { ISingle } from "@/interfaces/music.interface";

interface SinglesProps {
  className?: string;
  singles: ISingle[];
}

const Singles: FC<SinglesProps> = ({ className, singles }) => {
  // Items per page
  const ITEMS_PER_PAGE = 12;

  // Query
  const query = useSearchParams();
  const queryArray = [...query];
  const queryObject = Object.fromEntries(queryArray);
  const queryPage = queryObject?.page;
  const querySearch = queryObject?.search;
  const currentSearchText = querySearch || "";

  // Search
  const searchedSingles = singles.filter(({ title }) => {
    const titleLowerCased = title.toLowerCase();
    const searchTextLowerCased = currentSearchText.toLowerCase();

    return titleLowerCased.includes(searchTextLowerCased);
  });
  const { length: filteredSinglesLength } = searchedSingles;

  // Pagination
  const currentPage = +queryPage - 1 || 0;
  const startOffset = (currentPage * ITEMS_PER_PAGE) % filteredSinglesLength;
  const endOffset = startOffset + ITEMS_PER_PAGE;
  const currentItems = searchedSingles.slice(startOffset, endOffset);
  const pageCount = Math.ceil(filteredSinglesLength / ITEMS_PER_PAGE);

  return (
    <div className={clsx(className, "singles")}>
      <div className="singles__container">
        <Search className="singles__search" />
        <SinglesList singles={currentItems} />
        <Pagination
          className="singles__pagination"
          itemsPerTotal={currentItems}
          pageCount={pageCount}
        />
      </div>
    </div>
  );
};

export default Singles;
