import Item from "./Item";

const Items = ({ links, onClick }) =>
  links.map((link, index) => (
    <Item key={index} link={link} onClick={onClick} />
  ));

export default Items;
