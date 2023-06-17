import Content from "./Content";

const Contents = ({ tabs, activeTab }) => {
  const contentItems = tabs.map((tab) => {
    const isActive = activeTab === tab.id;

    if (isActive) {
      return <Content key={tab.id} content={tab.content} />;
    }
    return null;
  });

  return <div className="tabs__contents">{contentItems}</div>;
};

export default Contents;
