import { Tab } from "@headlessui/react";

const Content = ({ content }) => {
  return (
    <Tab.Panel className="tabs__content" tabIndex={-1}>
      {content}
    </Tab.Panel>
  );
};
export default Content;
