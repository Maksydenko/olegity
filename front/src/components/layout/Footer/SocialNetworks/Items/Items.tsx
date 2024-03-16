import Item from "./Item";

const Items = ({ links }) => {
  const items = links.map((link) => {
    const { label } = link;

    return <Item key={label} link={link} />;
  });

  return <ul className="social-networks__list">{items}</ul>;
};

export default Items;
