import Item from "./Item";

const Items = ({ links }) =>
  links.map((link, index) => <Item key={index} link={link} />);

export default Items;
