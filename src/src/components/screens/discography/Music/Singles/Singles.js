import { useState } from "react";

import Search from "@common/Search/Search";
import Items from "./Items/Items";

const Singles = ({ singles }) => {
  const [text, setText] = useState("");

  return (
    <div className="music__singles singles">
      <div className="singles__container">
        <Search className="singles" text={text} setText={setText} />
        <Items singles={singles} filterText={text} />
      </div>
    </div>
  );
};

export default Singles;
