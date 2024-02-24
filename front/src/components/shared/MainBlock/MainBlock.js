import { useTranslation } from "react-i18next";
import clsx from "clsx";

import MainLink from "../MainLink/MainLink";

const MainBlock = ({ className, keyword, link }) => {
  const { t } = useTranslation();

  const translationTitle = t(`${keyword}.title`);
  const translationText = t(`${keyword}.text`, {
    returnObjects: true,
  });

  const textItems = translationText.map((textItem) => {
    return <p key={textItem}>{t(textItem)}</p>;
  });

  return (
    <div className={clsx(className, "main-block")}>
      <h2 className="main-block__title">{translationTitle}</h2>
      <div className="main-block__text">{textItems}</div>
      {link && <MainLink className="main-block" link={link} />}
    </div>
  );
};

export default MainBlock;
