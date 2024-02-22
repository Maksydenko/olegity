import Title from "./Title";

const Titles = ({ tabs, activeTab, setActiveTab }) => {
  const titleItems = tabs.map((tab) => {
    const { id } = tab;
    const { length } = tabs;

    return (
      <Title
        key={id}
        tabsLength={length}
        tab={tab}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    );
  });

  return <ul className="tabs__titles">{titleItems}</ul>;
};

export default Titles;
