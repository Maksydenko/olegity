import { FC } from "react";

import TextBlockItem from "./TextBlockItem";

interface TextBlockListProps {
  texts: string[];
}

const TextBlockList: FC<TextBlockListProps> = ({ texts }) => {
  const textItems = texts.map((text) => {
    return <TextBlockItem key={text}>{text}</TextBlockItem>;
  });

  return <div className="text-block__text">{textItems}</div>;
};

export default TextBlockList;
