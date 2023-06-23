import { useRef } from "react";

const Body = ({ children, onClick }) => {
  const popupBoxRef = useRef(null);

  const handleClick = ({ target }) => {
    const popupBoxElement = popupBoxRef.current;

    if (!popupBoxElement?.contains(target)) {
      onClick();
    }
  };

  return (
    <div className="popup__body" onClick={handleClick}>
      <div className="popup__content">
        <div className="popup__box" ref={popupBoxRef}>
          <button className="popup__cross" onClick={onClick}></button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Body;
