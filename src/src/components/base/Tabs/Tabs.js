import { useState } from "react";

import Titles from "./Titles/Titles";
import Contents from "./Contents/Contents";

function Tabs(props) {
  const { className, tabs, onFilterTextClear } = props;
  const [isActive, setIsActive] = useState(tabs[0].id);

  return (
    <div className={`${className}__tabs tabs`}>
      <Titles
        tabs={tabs}
        isActive={isActive}
        setIsActive={setIsActive}
        {...(onFilterTextClear && { onFilterTextClear: onFilterTextClear })}
      />
      <Contents tabs={tabs} isActive={isActive} />
    </div>
  );
}

export default Tabs;
