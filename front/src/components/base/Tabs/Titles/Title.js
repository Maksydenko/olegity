import { Tab } from "@headlessui/react";
import clsx from "clsx";

const Title = ({ tabsLength, tab: { title }, vertical }) => {
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
      style={vertical ? {} : titleStyle}
    >
      {titleItem}
    </Tab>
  );
};

export default Title;
