import Title from "./Title";

function Titles(props) {
  const { tabs, isActive, setIsActive } = props;

  const tabItems = tabs.map((tab) => (
    <Title
      key={tab.id}
      tab={tab}
      isActive={isActive}
      setIsActive={setIsActive}
    />
  ));

  return <ul className="tabs__titles">{tabItems}</ul>;
}

export default Titles;
