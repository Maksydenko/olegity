import Item from "./Item";

const Items = ({ links, breakpoint, onClick }) => {
  const items = links.map((link) => {
    const { value } = link;

    return (
      <Item key={value} link={link} breakpoint={breakpoint} onClick={onClick} />
    );
  });

  return <ul className="menu__list">{items}</ul>;
};

export default Items;
