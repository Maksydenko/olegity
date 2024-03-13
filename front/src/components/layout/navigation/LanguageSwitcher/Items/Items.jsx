import Item from "./Item";

import { languages } from "../languages.const";

const Items = ({ onClick }) => {
  return languages.map((language) => {
    const { value } = language;

    return <Item key={value} language={language} onClick={onClick} />;
  });
};

export default Items;
