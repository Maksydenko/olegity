import { useTranslation } from "react-i18next";

function Body(props) {
  const { t } = useTranslation();
  const { title, text } = props;

  const textItems = text.map((textItem, index) => (
    <p key={index}>{t(textItem)}</p>
  ));

  return (
    <div className="about-section__body">
      <h2 className="about-section__title">{t(title)}</h2>
      <div className="about-section__text">{textItems}</div>
    </div>
  );
}

export default Body;
