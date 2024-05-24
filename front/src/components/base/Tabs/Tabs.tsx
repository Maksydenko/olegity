import { FC, useEffect } from "react";
import { useRouter } from "next/router";
import clsx from "clsx";

import { Tab } from "@headlessui/react";

import Contents from "./Contents/Contents";
import Titles from "./Titles/Titles";

import { getSearchParam } from "@/utils/getSearchParam.util";

import { ITab } from "./tab.interface";

interface TabsProps {
  className?: string;
  tabs: ITab[];
  vertical?: boolean;
  manual?: boolean;
  defaultTabId?: number;
  searchParam?: string;
}

const Tabs: FC<TabsProps> = ({
  className,
  tabs,
  vertical,
  manual,
  defaultTabId,
  searchParam = "tab",
}) => {
  const [firstTab] = tabs;
  const { id: firstTabId } = firstTab;

  const { push, asPath } = useRouter();

  const queryTab = getSearchParam(asPath, "tab");

  const currentTabId = queryTab || defaultTabId || firstTabId;
  const currentTabIndex = tabs?.findIndex(({ id: tabId }) => {
    return tabId == currentTabId;
  });

  useEffect(() => {
    if (!queryTab) {
      push({
        query: `${searchParam}=${currentTabId}`,
      });
    }
  }, [currentTabId, push, queryTab, searchParam]);

  return (
    <div className={clsx(className, "tabs", vertical && "tabs_vertical")}>
      <Tab.Group
        selectedIndex={currentTabIndex}
        vertical={vertical}
        manual={manual}
        onChange={(index) => {
          const { id: newTabId } = tabs[index];
          push({
            query: `${searchParam}=${newTabId}`,
          });
        }}
      >
        <Titles tabs={tabs} vertical={vertical} />
        <Contents tabs={tabs} />
      </Tab.Group>
    </div>
  );
};

export default Tabs;
