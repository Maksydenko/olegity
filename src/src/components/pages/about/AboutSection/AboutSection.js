import { useTranslation } from "react-i18next";

import Img from "@base/Img/Img";

function HistoryBlock(props) {
  const { t } = useTranslation();
  const { className, title, text, img } = props;

  const textItems =
    text && text.map((textItem, index) => <p key={index}>{t(textItem)}</p>);

  return (
    <section className={`${className} about-section`}>
      <div className="about-section__container">
        <div className="about-section__body">
          {title && <h2 className="about-section__title">{t(title)}</h2>}
          <div className="about-section__text">{textItems}</div>
        </div>
        <Img className="about-section" img={img} />
      </div>
    </section>
  );
}

export default HistoryBlock;
