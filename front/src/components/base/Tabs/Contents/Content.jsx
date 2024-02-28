import { Tab } from "@headlessui/react";

const Content = ({ content }) => {
  return <Tab.Panel className="tabs__content">{content}</Tab.Panel>;
};
export default Content;
