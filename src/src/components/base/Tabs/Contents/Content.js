const Content = ({ tab, activeTab }) =>
  activeTab === tab.id && <div className="tabs__content">{tab.content}</div>;

export default Content;
