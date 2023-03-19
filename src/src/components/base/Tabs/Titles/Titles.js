import Title from "./Title";

function Titles(props) {
  const { tabs, isActive, setIsActive, onFilterTextClear } = props;

  const tabsWidth = `${100 / tabs.length}%`;

  const tabItems = tabs.map((tab) => (
    <Title
      key={tab.id}
      tab={tab}
      tabsWidth={tabsWidth}
      isActive={isActive}
      setIsActive={setIsActive}
      onFilterTextClear={onFilterTextClear}
    />
  ));

  return <ul className="tabs__titles">{tabItems}</ul>;
}

export default Titles;
