import Item from "./Item";

const Items = ({ links }) => {
  const items = links.map((link) => {
    const { href } = link;

    return <Item key={href} link={link} />;
  });

  return <ul className="navigation__list">{items}</ul>;
};

export default Items;
