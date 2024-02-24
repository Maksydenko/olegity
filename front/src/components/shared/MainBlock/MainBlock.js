import { useTranslation } from "react-i18next";

import MainLink from "../MainLink/MainLink";

const MainBlock = ({ className, title, text, link }) => {
  const { t } = useTranslation();

  const textItems = text.map((textItem) => {
    return <p key={textItem}>{t(textItem)}</p>;
  });

  const linkItem = link && <MainLink className="main-block" link={link} />;

  return (
    <div className={`${className}__main-block main-block`}>
      <h2 className="main-block__title">{t(title)}</h2>
      <div className="main-block__text">{textItems}</div>
      {linkItem}
    </div>
  );
};

export default MainBlock;
