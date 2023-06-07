import Item from "./Item";

const Items = ({ links }) =>
  links.map((link) => <Item key={link.path} link={link} />);

export default Items;
