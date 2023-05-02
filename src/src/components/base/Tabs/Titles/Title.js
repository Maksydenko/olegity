import { getActiveClassName } from "@utils/className.utils";

const Title = ({ tabsLength, tab, activeTab, setActiveTab }) => {
  const tabWidth = 100 / tabsLength;
  const styleWidth = {
    width: `${tabWidth}%`,
  };
  const handleClick = () => setActiveTab(tab.id);

  return (
    <li
      className={getActiveClassName("tabs__title", activeTab === tab.id)}
      style={styleWidth}
      onClick={handleClick}
    >
      <span>{tab.title}</span>
    </li>
  );
};

export default Title;
