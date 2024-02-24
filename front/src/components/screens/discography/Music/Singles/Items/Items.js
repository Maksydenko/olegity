import Item from "./Item";

const Items = ({ singles, filterText }) => {
  const filteredSingles = singles.filter(({ title }) => {
    const titleLowerCased = title.toLowerCase();
    const filterTextLowerCased = filterText.toLowerCase();

    return titleLowerCased.includes(filterTextLowerCased);
  });

  const singleItems = filteredSingles.map((single) => {
    const { title } = single;

    return <Item key={title} single={single} />;
  });

  return <div className="singles__items">{singleItems}</div>;
};

export default Items;
