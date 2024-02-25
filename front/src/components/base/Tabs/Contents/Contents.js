import { Tab } from "@headlessui/react";

import Content from "./Content";

const Contents = ({ tabs }) => {
  const contentItems = tabs.map(({ id, content }) => {
    return <Content key={id} content={content} />;
  });

  return <Tab.Panels className="tabs__contents">{contentItems}</Tab.Panels>;
};

export default Contents;
