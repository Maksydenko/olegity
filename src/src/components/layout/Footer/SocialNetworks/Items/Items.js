import Item from "./Item";

const Items = ({ links }) => {
  const items = links.map((link) => {
    const { value } = link;

    return <Item key={value} link={link} />;
  });

  return <ul className="social-networks__list">{items}</ul>;
};

export default Items;
