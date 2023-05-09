import { useInput } from "@hooks/useInput";

import Search from "@common/Search/Search";
import Items from "./Items/Items";

const Singles = ({ singles }) => {
  const filterInput = useInput();

  return (
    <div className="music__singles singles">
      <div className="singles__container">
        <Search className="singles" {...filterInput} />
        <Items singles={singles} filterText={filterInput.text} />
      </div>
    </div>
  );
};

export default Singles;
