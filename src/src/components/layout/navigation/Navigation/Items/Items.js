import Item from "./Item";

const Items = ({ links }) => {
  const items = links.map((link) => {
    const { path } = link;

    return <Item key={path} link={link} />;
  });

  return <ul className="navigation__list">{items}</ul>;
};

export default Items;
