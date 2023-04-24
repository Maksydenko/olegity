import { useState } from "react";

export function useInput() {
  const [filterText, setFilterText] = useState("");

  function onFilterTextChange(filterText) {
    setFilterText(filterText);
  }

  return { filterText, onFilterTextChange };
}
