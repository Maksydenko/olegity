import { handleClassName } from "@utils/className.util";

const Title = ({ tabsLength, tab: { id, title }, activeTab, setActiveTab }) => {
  const isActive = activeTab === id;
  const tabWidth = 100 / tabsLength;

  const handleClick = () => setActiveTab(id);

  const styleWidth = {
    width: `${tabWidth}%`,
  };

  return (
    <li
      className={handleClassName(isActive, "tabs__title")}
      style={styleWidth}
      onClick={handleClick}
    >
      <span>{title}</span>
    </li>
  );
};

export default Title;
