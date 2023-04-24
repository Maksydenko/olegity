import Item from "./Item";

function Items(props) {
  const { links, onClick } = props;

  return links.map((link, index) => (
    <Item key={index} link={link} onClick={onClick} />
  ));
}
export default Items;
