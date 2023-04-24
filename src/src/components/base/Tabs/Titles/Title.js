function Title(props) {
  const { tab, isActive, setIsActive } = props;

  function handleClick() {
    setIsActive(tab.id);
  }

  return (
    <li
      className={`tabs__title${isActive === tab.id ? " _active" : ""}`}
      onClick={handleClick}
    >
      <span>{tab.title}</span>
    </li>
  );
}

export default Title;
