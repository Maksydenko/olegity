import { Tab } from "@headlessui/react";

import { ITab } from "../tab.interface";
import { FC } from "react";

interface ContentProps {
  content: ITab["content"];
}

const Content: FC<ContentProps> = ({ content }) => {
  return <Tab.Panel className="tabs__content">{content}</Tab.Panel>;
};

export default Content;
