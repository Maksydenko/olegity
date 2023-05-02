import { useState } from "react";

import Titles from "./Titles/Titles";
import Contents from "./Contents/Contents";

const Tabs = ({ className, tabs, defaultTab = 0 }) => {
  const [activeTab, setActiveTab] = useState(tabs[defaultTab].id);

  return (
    <div className={`${className}__tabs tabs`}>
      <Titles tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <Contents tabs={tabs} activeTab={activeTab} />
    </div>
  );
};

export default Tabs;
