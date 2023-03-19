import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function MainBlock(props) {
  const { t } = useTranslation();
  const { className, title, text, link } = props;

  const textItems =
    text && text.map((textItem, index) => <p key={index}>{t(textItem)}</p>);

  return (
    <div className={`${className}__main-block main-block`}>
      {title && <h2 className="main-block__title">{t(title)}</h2>}
      <div className="main-block__text">{textItems}</div>
      {link && (
        <Link to={link.path} className="main-block__link">
          {t(link.value)}
        </Link>
      )}
    </div>
  );
}

export default MainBlock;
