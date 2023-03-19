import Item from "./Item";

function Items(props) {
  const { links } = props;

  return links.map((link, index) => <Item key={index} link={link} />);
}
export default Items;
