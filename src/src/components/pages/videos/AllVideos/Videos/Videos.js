import Search from "@common/Search/Search";
import Items from "./Items/Items";

function Videos(props) {
  const { videos, filterText, onFilterTextChange } = props;

  return (
    <div className="all-videos__videos videos">
      <div class="videos__container">
        <Search
          className="videos"
          filterText={filterText}
          onFilterTextChange={onFilterTextChange}
        />
        <Items videos={videos} filterText={filterText} />
      </div>
    </div>
  );
}

export default Videos;
