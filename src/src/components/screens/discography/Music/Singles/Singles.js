import Search from "@common/Search/Search";
import Items from "./Items/Items";

import useInput from "@hooks/useInput";

function Singles(props) {
  const { singles } = props;
  const filterInput = useInput();

  return (
    <div className="music__singles singles">
      <div className="singles__container">
        <Search className="singles" {...filterInput} />
        <Items singles={singles} filterText={filterInput.filterText} />
      </div>
    </div>
  );
}

export default Singles;
