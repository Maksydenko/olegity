import Item from "./Item";

const Items = ({ singles, filterText }) => {
  const filteredSingles = singles.filter((single) =>
    single.title.toLowerCase().includes(filterText.toLowerCase())
  );

  const singleItems = filteredSingles.map((single, index) => (
    <Item key={index} single={single} />
  ));

  return <div className="singles__items">{singleItems}</div>;
};

export default Items;
