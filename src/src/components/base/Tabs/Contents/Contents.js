import Content from "./Content";

const Contents = ({ tabs, isActive }) => (
  <div className="tabs__contents">
    {tabs.map((tab) => (
      <Content key={tab.id} tab={tab} isActive={isActive} />
    ))}
  </div>
);

export default Contents;
