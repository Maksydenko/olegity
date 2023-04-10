import { useState } from "react";

function useInput() {
  const [filterText, setFilterText] = useState("");

  function onFilterTextChange(filterText) {
    setFilterText(filterText);
  }

  return { filterText, onFilterTextChange };
}

export default useInput;
