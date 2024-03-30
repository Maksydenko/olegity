import { FC } from "react";
import { Tab } from "@headlessui/react";

import Title from "./Title";

import { ITab } from "../tab.interface";

interface TitlesProps {
  tabs: ITab[];
  vertical?: boolean;
}

const Titles: FC<TitlesProps> = ({ tabs, vertical }) => {
  const { length: tabsLength } = tabs;

  const titleItems = tabs.map((tab) => {
    const { id, title } = tab;

    return (
      <Title
        key={id}
        tabsLength={tabsLength}
        title={title}
        vertical={vertical}
      />
    );
  });

  return <Tab.List className="tabs__titles">{titleItems}</Tab.List>;
};

export default Titles;
