import { classActive } from "@utils/classUtils";

const Title = ({ tabsLength, tab, isActive, setIsActive }) => {
  const tabWidth = 100 / tabsLength;
  const styleWidth = {
    width: `${tabWidth}%`,
  };
  const handleClick = () => setIsActive(tab.id);

  return (
    <li
      className={classActive("tabs__title", isActive === tab.id)}
      style={styleWidth}
      onClick={handleClick}
    >
      <span>{tab.title}</span>
    </li>
  );
};

export default Title;
