import Item from "./Item";

const Items = ({ links, onClick }) =>
  links.map((link) => <Item key={link.href} link={link} onClick={onClick} />);

export default Items;
