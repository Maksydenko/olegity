import { Tab } from "@headlessui/react";
import clsx from "clsx";

import Titles from "./Titles/Titles";
import Contents from "./Contents/Contents";

const Tabs = ({ className, tabs, vertical, defaultTab = 0 }) => {
  return (
    <div className={clsx(className, "tabs", vertical && "tabs_vertical")}>
      <Tab.Group vertical={vertical} defaultIndex={defaultTab} manual>
        <Titles tabs={tabs} vertical={vertical} />
        <Contents tabs={tabs} />
      </Tab.Group>
    </div>
  );
};

export default Tabs;
