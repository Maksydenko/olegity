import { useInput } from "@hooks/useInput";

import Search from "@common/Search/Search";
import Items from "./Items/Items";

function Videos(props) {
  const { videos } = props;
  const filterInput = useInput();

  return (
    <div className="all-videos__videos videos">
      <div className="videos__container">
        <Search className="videos" {...filterInput} />
        <Items videos={videos} filterText={filterInput.filterText} />
      </div>
    </div>
  );
}

export default Videos;
