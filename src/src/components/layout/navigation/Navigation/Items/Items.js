import Item from "./Item";

function Items({ links }) {
  return links.map((link, index) => <Item key={index} link={link} />);
}
export default Items;
