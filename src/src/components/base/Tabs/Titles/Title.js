import { classActive } from "@utils/classUtils";

const Title = ({ tab, isActive, setIsActive }) => {
  const handleClick = () => setIsActive(tab.id);

  return (
    <li
      className={classActive("tabs__title", isActive === tab.id)}
      onClick={handleClick}
    >
      <span>{tab.title}</span>
    </li>
  );
};

export default Title;
