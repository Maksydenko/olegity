import Title from "./Title";

const Titles = ({ tabs, activeTab, setActiveTab }) => {
  const titleItems = tabs.map((tab) => (
    <Title
      key={tab.id}
      tabsLength={tabs.length}
      tab={tab}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    />
  ));

  return <ul className="tabs__titles">{titleItems}</ul>;
};

export default Titles;
