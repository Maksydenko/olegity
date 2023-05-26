import { useState } from "react";

import Search from "@common/Search/Search";
import Items from "./Items/Items";

const Videos = ({ videos }) => {
  const [text, setText] = useState("");

  return (
    <div className="all-videos__videos videos">
      <div className="videos__container">
        <Search className="videos" text={text} setText={setText} />
        <Items videos={videos} filterText={text} />
      </div>
    </div>
  );
};

export default Videos;
