import { useTranslation } from "react-i18next";

import MainLink from "@common/MainLink/MainLink";

function MainBlock(props) {
  const { t } = useTranslation();
  const { className, title, text, link } = props;

  const textItems = text.map((textItem, index) => (
    <p key={index}>{t(textItem)}</p>
  ));

  return (
    <div className={`${className}__main-block main-block`}>
      <h2 className="main-block__title">{t(title)}</h2>
      <div className="main-block__text">{textItems}</div>
      {link && <MainLink className="main-block" link={link} />}
    </div>
  );
}

export default MainBlock;
