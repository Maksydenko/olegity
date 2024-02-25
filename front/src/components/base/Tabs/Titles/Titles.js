import { Tab } from "@headlessui/react";

import Title from "./Title";

const Titles = ({ tabs, vertical }) => {
  const { length: tabsLength } = tabs;

  const titleItems = tabs.map((tab) => {
    const { id } = tab;

    return (
      <Title key={id} tabsLength={tabsLength} tab={tab} vertical={vertical} />
    );
  });

  return <Tab.List className="tabs__titles">{titleItems}</Tab.List>;
};

export default Titles;
