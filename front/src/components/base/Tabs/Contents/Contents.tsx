import { FC } from "react";
import { Tab } from "@headlessui/react";

import Content from "./Content";

import { ITab } from "../tab.interface";

interface ContentsProps {
  tabs: ITab[];
}

const Contents: FC<ContentsProps> = ({ tabs }) => {
  const contentItems = tabs.map(({ id, content }) => {
    return <Content key={id} content={content} />;
  });

  return <Tab.Panels className="tabs__contents">{contentItems}</Tab.Panels>;
};

export default Contents;
