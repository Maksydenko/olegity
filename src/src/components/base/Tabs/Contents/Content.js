const Content = ({ tab, isActive }) =>
  isActive === tab.id && <div className="tabs__content">{tab.content}</div>;

export default Content;
