import { useState } from "react";

import Pagination from "@base/Pagination/Pagination";
import Search from "@shared/Search/Search";
import Items from "./Items/Items";

const Singles = ({ singles }) => {
  const [text, setText] = useState("");
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 12;

  const filteredSingles = singles.filter(({ title }) => {
    const titleLowerCased = title.toLowerCase();
    const filterTextLowerCased = text.toLowerCase();

    return titleLowerCased.includes(filterTextLowerCased);
  });
  const { length: filteredSinglesLength } = filteredSingles;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredSingles.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredSinglesLength / itemsPerPage);

  const handlePageChange = (e) => {
    const newOffset = (e.selected * itemsPerPage) % filteredSinglesLength;
    setItemOffset(newOffset);

    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div className="music__singles singles">
      <div className="singles__container">
        <Search className="singles__search" text={text} setText={setText} />
        {/* Передаем отфильтрованные элементы в компонент Items */}
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
