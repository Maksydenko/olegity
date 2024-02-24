import Title from "./Title";

const Titles = ({ tabs, activeTab, setActiveTab }) => {
  const { length: tabsLength } = tabs;

  const titleItems = tabs.map((tab) => {
    const { id } = tab;

    return (
      <Title
        key={id}
        tabsLength={tabsLength}
        tab={tab}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    );
  });

  return <ul className="tabs__titles">{titleItems}</ul>;
};

export default Titles;
