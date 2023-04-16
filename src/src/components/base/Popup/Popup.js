import { useState } from "react";

import Body from "./Body";

function Popup(props) {
  const [isActive, setIsActive] = useState(false);

  const body = document.body;
  function handleScrollLock() {
    if (isActive) {
      body.classList.remove("_lock");
    } else {
      body.classList.add("_lock");
    }
  }

  function handlePopupActive() {
    setIsActive(!isActive);
    handleScrollLock();
  }

  const { className, button, children } = props;

  return (
    <div className={`${className}__popup popup`}>
      <button
        className={`${className}__popup-button popup__button`}
        onClick={handlePopupActive}
      >
        {button}
      </button>
      {isActive && (
        <Body onPopupActive={handlePopupActive} children={children} />
      )}
    </div>
  );
}

export default Popup;
