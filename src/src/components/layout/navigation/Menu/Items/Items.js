import Item from "./Item";

function Items(props) {
  const links = props.links;
  const onMenuClose = props.onMenuClose;

  return links.map((link, index) => (
    <Item key={index} link={link} onMenuClose={onMenuClose} />
  ));
}
export default Items;
