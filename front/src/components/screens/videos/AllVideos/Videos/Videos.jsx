import { useState } from "react";

import Search from "@form/Search/Search";
import Items from "./Items/Items";

const Videos = ({ videos }) => {
  const [text, setText] = useState("");

  return (
    <div className="all-videos__videos videos">
      <div className="videos__container">
        <Search className="videos__search" text={text} setText={setText} />
        <Items videos={videos} filterText={text} />
      </div>
    </div>
  );
};

export default Videos;
