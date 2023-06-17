import { useState } from "react";

import Titles from "./Titles/Titles";
import Contents from "./Contents/Contents";

const Tabs = ({ className, tabs, defaultTab = 0 }) => {
  const idDefaultTab = tabs[defaultTab].id;
  const [activeTab, setActiveTab] = useState(idDefaultTab);

  return (
    <div className={`${className}__tabs tabs`}>
      <Titles tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <Contents tabs={tabs} activeTab={activeTab} />
    </div>
  );
};

export default Tabs;
