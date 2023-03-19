import { useState } from "react";

import Search from "@common/Search/Search";
import Items from "./Items/Items";

function Singles(props) {
  const [filterText, setFilterText] = useState("");

  function handleFilterTextChange(filterText) {
    setFilterText(filterText);
  }

  const { singles } = props;

  return (
    <div className="music__singles singles">
      <div className="singles__container">
        <Search
          className="singles"
          filterText={filterText}
          onFilterTextChange={handleFilterTextChange}
        />
        <Items singles={singles} filterText={filterText} />
      </div>
    </div>
  );
}

export default Singles;
