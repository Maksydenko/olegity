import { useNavigate, useLocation } from "react-router-dom";
import { Tab } from "@headlessui/react";
import clsx from "clsx";

import { useEffect } from "react";

import Titles from "./Titles/Titles";
import Contents from "./Contents/Contents";

const Tabs = ({ className, tabs, vertical }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { hash } = location;

  const firstTab = tabs[0];
  const firstTabId = firstTab.id;

  const defaultTab = hash.slice(1) || firstTabId;
  const defaultIndex = tabs.findIndex(({ id }) => {
    return id === defaultTab;
  });

  useEffect(() => {
    if (!hash) {
      navigate(`#${firstTabId}`);
    }
  }, [hash, navigate, firstTabId]);

  return (
    <div className={clsx(className, "tabs", vertical && "tabs_vertical")}>
      <Tab.Group
        vertical={vertical}
        defaultIndex={defaultIndex}
        manual
        onChange={(index) => {
          navigate(`#${tabs[index].id}`);
        }}
      >
        <Titles tabs={tabs} vertical={vertical} />
        <Contents tabs={tabs} />
      </Tab.Group>
    </div>
  );
};

export default Tabs;
