import Title from "./Title";

const Titles = ({ tabs, activeTab, setActiveTab }) => (
  <ul className="tabs__titles">
    {tabs.map((tab) => (
      <Title
        key={tab.id}
        tabsLength={tabs.length}
        tab={tab}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    ))}
  </ul>
);

export default Titles;
