import React, { useState } from "react";

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

  function handlePopupClose(event) {
    if (!event.target.closest(".popup__content")) {
      handlePopupActive();
    }
  }

  const { className, button, children } = props;

  return (
    <>
      <button
        className={`${className}__button popup__button`}
        onClick={handlePopupActive}
      >
        {button}
      </button>
      {isActive && (
        <div className={`${className}__popup popup`} onClick={handlePopupClose}>
          <div className="popup__body">
            <div className="popup__content">
              <button
                className="popup__cross"
                onClick={handlePopupActive}
              ></button>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Popup;
