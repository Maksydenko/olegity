import Content from "./Content";

const Contents = ({ tabs, activeTab }) => {
  const contentItems = tabs.map((tab) => (
    <Content key={tab.id} tab={tab} activeTab={activeTab} />
  ));

  return <div className="tabs__contents">{contentItems}</div>;
};

export default Contents;
