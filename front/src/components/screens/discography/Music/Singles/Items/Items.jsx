import Item from "./Item";

const Items = ({ singles }) => {
  const singleItems = singles.map((single, index) => {
    return <Item key={index} single={single} />;
  });

  return <div className="singles__items">{singleItems}</div>;
};

export default Items;
