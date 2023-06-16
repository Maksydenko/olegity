const Content = ({ tab: { id, content }, activeTab }) => {
  const isActive = activeTab === id;

  return isActive && <div className="tabs__content">{content}</div>;
};
export default Content;
