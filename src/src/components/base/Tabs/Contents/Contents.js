import Content from "./Content";

function Contents(props) {
  const { tabs, isActive } = props;

  const contentItems = tabs.map((tab) => (
    <Content key={tab.id} tab={tab} isActive={isActive} />
  ));

  return <div className="tabs__contents">{contentItems}</div>;
}

export default Contents;
