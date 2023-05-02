import Content from "./Content";

const Contents = ({ tabs, activeTab }) => (
  <div className="tabs__contents">
    {tabs.map((tab) => (
      <Content key={tab.id} tab={tab} activeTab={activeTab} />
    ))}
  </div>
);

export default Contents;
