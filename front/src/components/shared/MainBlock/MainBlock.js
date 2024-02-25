import { useTranslation } from "react-i18next";
import clsx from "clsx";

import Btn from "@form/Btn/Btn";

const MainBlock = ({ className, keyword, link }) => {
  const { t } = useTranslation();

  const getTranslation = (key) => {
    return `${keyword}.${key}`;
  };

  const translationTitle = t(getTranslation("title"));
  const translationText = t(getTranslation("text"), {
    returnObjects: true,
  });

  const textItems = translationText.map((textItem) => {
    return <p key={textItem}>{t(textItem)}</p>;
  });

  return (
    <div className={clsx(className, "main-block")}>
      <h2 className="main-block__title">{translationTitle}</h2>
      <div className="main-block__text">{textItems}</div>
      {link && (
        <Btn className="main-block" path={link.path}>
          {t(link.value)}
        </Btn>
      )}
    </div>
  );
};

export default MainBlock;
