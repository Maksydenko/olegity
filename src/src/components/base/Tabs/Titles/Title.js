function Title(props) {
  const { tab, tabsWidth, isActive, setIsActive, onFilterTextClear } = props;

  function handleTabClick() {
    setIsActive(tab.id);
    onFilterTextClear && onFilterTextClear();
  }

  return (
    <li
      className={`tabs__title${isActive === tab.id ? " _active" : ""}`}
      onClick={handleTabClick}
      style={{ flexBasis: tabsWidth, width: tabsWidth }}
    >
      <span>{tab.title}</span>
    </li>
  );
}

export default Title;
