function Content(props) {
  const { tab, isActive } = props;

  return (
    isActive === tab.id && <div className="tabs__content">{tab.content}</div>
  );
}

export default Content;
