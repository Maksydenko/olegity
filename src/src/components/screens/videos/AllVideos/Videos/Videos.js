import { useInput } from "@hooks/useInput";

import Search from "@common/Search/Search";
import Items from "./Items/Items";

const Videos = ({ videos }) => {
  const filterInput = useInput();

  return (
    <div className="all-videos__videos videos">
      <div className="videos__container">
        <Search className="videos" {...filterInput} />
        <Items videos={videos} filterText={filterInput.text} />
      </div>
    </div>
  );
};

export default Videos;
