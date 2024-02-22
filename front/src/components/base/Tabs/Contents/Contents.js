import Content from "./Content";

const Contents = ({ tabs, activeTab }) => {
  const contentItems = tabs.map((tab) => {
    const { id, content } = tab;
    const isActive = activeTab === id;

    if (isActive) {
      return <Content key={id} content={content} />;
    }
    return null;
  });

  return <div className="tabs__contents">{contentItems}</div>;
};

export default Contents;
