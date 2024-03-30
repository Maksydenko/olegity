import { FC } from "react";
import { Tab } from "@headlessui/react";
import clsx from "clsx";

import { ITab } from "../tab.interface";

interface TitleProps {
  tabsLength: number;
  title: ITab["title"];
  vertical?: boolean;
}

const Title: FC<TitleProps> = ({ tabsLength, title, vertical }) => {
  const titleItem = typeof title === "string" ? <h3>{title}</h3> : title;

  const tabWidth = 100 / tabsLength;
  const titleStyle = {
    width: `${tabWidth}%`,
  };

  return (
    <Tab
      className={({ selected }) =>
        clsx("tabs__title", selected && "tabs__title_active")
      }
      {...(!vertical && {
        style: titleStyle,
      })}
    >
      {titleItem}
    </Tab>
  );
};

export default Title;
