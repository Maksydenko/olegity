"use client";

import { FC, useEffect, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Tab } from "@headlessui/react";
import clsx from "clsx";

import Titles from "./Titles/Titles";
import Contents from "./Contents/Contents";
import { ITab } from "./tab.interface";

interface TabsProps {
  className?: string;
  tabs: ITab[];
  vertical?: boolean;
  defaultTabId?: number;
  searchParam?: string;
}

const Tabs: FC<TabsProps> = ({
  className,
  tabs,
  vertical,
  defaultTabId,
  searchParam = "tab",
}) => {
  const [firstTab] = tabs;
  const { id: firstTabId } = firstTab;

  const { push } = useRouter();
  const query = useSearchParams();

  const queryArray = [...query];
  const queryObject = Object.fromEntries(queryArray);
  const queryTab = queryObject?.tab;

  const currentTabId = queryTab || defaultTabId || firstTabId;
  const currentTabIndex = tabs?.findIndex(({ id }) => {
    return id == currentTabId;
  });

  if (!queryTab) {
    push(`?${searchParam}=${currentTabId}`);
  }

  return (
    <div className={clsx(className, "tabs", vertical && "tabs_vertical")}>
      <Tab.Group
        vertical={vertical}
        defaultIndex={currentTabIndex}
        manual
        onChange={(index) => {
          push(`?tab=${tabs[index].id}`);
        }}
      >
        <Titles tabs={tabs} vertical={vertical} />
        <Contents tabs={tabs} />
      </Tab.Group>
    </div>
  );
};

export default Tabs;
