import { handleClassName } from "@utils/className.util";

const Title = ({ tabsLength, tab, activeTab, setActiveTab }) => {
  const tabWidth = 100 / tabsLength;
  const styleWidth = {
    width: `${tabWidth}%`,
  };
  const handleClick = () => setActiveTab(tab.id);

  return (
    <li
      className={handleClassName(activeTab === tab.id, "tabs__title")}
      style={styleWidth}
      onClick={handleClick}
    >
      <span>{tab.title}</span>
    </li>
  );
};

export default Title;
