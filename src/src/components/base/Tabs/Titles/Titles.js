import Title from "./Title";

const Titles = ({ tabs, isActive, setIsActive }) => (
  <ul className="tabs__titles">
    {tabs.map((tab) => (
      <Title
        key={tab.id}
        tab={tab}
        isActive={isActive}
        setIsActive={setIsActive}
      />
    ))}
  </ul>
);

export default Titles;
