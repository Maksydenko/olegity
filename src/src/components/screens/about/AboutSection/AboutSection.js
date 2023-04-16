import Img from "@base/Img/Img";
import Body from "./Body";

function HistoryBlock(props) {
  const { className, title, text, img } = props;

  return (
    <section className={`${className} about-section`}>
      <div className="about-section__container">
        <Body title={title} text={text} />
        <Img className="about-section" img={img} />
      </div>
    </section>
  );
}

export default HistoryBlock;
